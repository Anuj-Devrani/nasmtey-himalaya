import { createClient } from 'contentful'
import { config } from 'dotenv'
import { INameFields } from '../@types/contentful'

/*
 * We tell TypeScript that those environment variables are always defined.
 * If you want to learn more about this madness, read:
 * https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONTENTFUL_SPACE_ID: string
      CONTENTFUL_ACCESS_TOKEN: string
    }
  }
}

config()

export default class ContentService {
  static get instance() {
    return new ContentService()
  }

  client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  async getTrekIds<T>(type: string) {
    return (
      await this.client.getEntries<T>({
        content_type: type,
        select: 'sys.id,fields.trekId,fields.price,fields.name,fields.location',
      })
    ).items
  }

  async getEntriesByType<T>(type: string) {
    return (
      await this.client.getEntries<T>({
        content_type: type,
      })
    ).items
  }

  async getTrekById<T>(id: string) {
    return await this.client.getEntry<T>(id)
  }
  async getTrekBySlug(slug: string) {
    return (
      await this.client.getEntries<INameFields>({
        content_type: 'name',
        'fields.trekId': slug,
      })
    ).items[0]
  }
}
