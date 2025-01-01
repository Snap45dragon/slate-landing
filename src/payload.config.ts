import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { Users } from './collections/Users'
import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Products } from './collections/Products'
import Homepage from './globals/Homepage'
import AboutUs from './globals/AboutUs'
import ContactUs from './globals/ContactUs'
import Company from './globals/Company'
import { Forms } from './collections/Forms'
import { s3Storage } from '@payloadcms/storage-s3'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname, 'src'),
    },
    components: {
      graphics: {
        // Logo: '/app/(payload)/_compoennts/logo#Logo',
        // Icon: '/app/(payload)/_compoennts/icon#Icon',
      },
    },
  },
  collections: [Users, Media, Categories, Products, Forms],
  globals: [Company, Homepage, AboutUs, ContactUs],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  email: undefined,
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      config: {
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT,
      },
      bucket: process.env.S3_BUCKET || '',
    }),
  ],
})
