interface CacheItem {
  data: any;
  timestamp: number;
  expiry: number;
}

class Cache {
  private cache: Map<string, CacheItem> = new Map();
  private defaultTTL: number = 5 * 60 * 1000; // 5 minutes default

  set(key: string, data: any, ttl?: number): void {
    const expiry = ttl || this.defaultTTL;
    const item: CacheItem = {
      data,
      timestamp: Date.now(),
      expiry: Date.now() + expiry
    };
    this.cache.set(key, item);
  }

  get(key: string): any | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    // Check if expired
    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  has(key: string): boolean {
    const item = this.cache.get(key);
    
    if (!item) {
      return false;
    }

    // Check if expired
    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  clear(): void {
    this.cache.clear();
  }

  delete(key: string): void {
    this.cache.delete(key);
  }

  // Get cache stats for debugging
  getStats(): { size: number; keys: string[] } {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  }
}

// Create a singleton instance
const cache = new Cache();

export default cache;

// Helper function to create cached API calls
export const withCache = async <T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttl?: number
): Promise<T> => {
  // Check if we have cached data
  if (cache.has(key)) {
    return cache.get(key);
  }

  // Fetch fresh data
  try {
    const data = await fetchFn();
    cache.set(key, data, ttl);
    return data;
  } catch (error) {
    // If fetch fails and we have expired data, return it
    const expiredData = cache.get(key);
    if (expiredData) {
      return expiredData;
    }
    throw error;
  }
};