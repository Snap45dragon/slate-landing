/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    categories: Category;
    products: Product;
    forms: Form;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    categories: CategoriesSelect<false> | CategoriesSelect<true>;
    products: ProductsSelect<false> | ProductsSelect<true>;
    forms: FormsSelect<false> | FormsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    company: Company;
    homepage: Homepage;
    'about-us': AboutUs;
    'contact-us': ContactUs;
  };
  globalsSelect: {
    company: CompanySelect<false> | CompanySelect<true>;
    homepage: HomepageSelect<false> | HomepageSelect<true>;
    'about-us': AboutUsSelect<false> | AboutUsSelect<true>;
    'contact-us': ContactUsSelect<false> | ContactUsSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename: string;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  name: string;
  description: string;
  image: string | Media;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products".
 */
export interface Product {
  id: string;
  name: string;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  images: (string | Media)[];
  category: string | Category;
  related_products?: (string | Product)[] | null;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forms".
 */
export interface Form {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'categories';
        value: string | Category;
      } | null)
    | ({
        relationTo: 'products';
        value: string | Product;
      } | null)
    | ({
        relationTo: 'forms';
        value: string | Form;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories_select".
 */
export interface CategoriesSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  image?: T;
  slug?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products_select".
 */
export interface ProductsSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  images?: T;
  category?: T;
  related_products?: T;
  slug?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forms_select".
 */
export interface FormsSelect<T extends boolean = true> {
  name?: T;
  email?: T;
  phone?: T;
  subject?: T;
  message?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "company".
 */
export interface Company {
  id: string;
  name: string;
  logo: string | Media;
  tagline: string;
  catalogue: string | Media;
  email: string;
  phone: string;
  social_links: {
    icon: string | Media;
    link: string;
    id?: string | null;
  }[];
  not_found_image: string | Media;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "homepage".
 */
export interface Homepage {
  id: string;
  hero: {
    title: string;
    description: string;
    button: string;
    image: string | Media;
  };
  services: {
    service: {
      title: string;
      description: string;
      id?: string | null;
    }[];
  };
  introduction: {
    title: string;
    description: string;
    button: string;
    image: string | Media;
  };
  numbers: {
    number: {
      title: string;
      description: string;
      id?: string | null;
    }[];
  };
  top_categories: {
    title: string;
    description: string;
    categories: (string | Category)[];
  };
  testimonials: {
    title?: string | null;
    testimonial: {
      name: string;
      image: string | Media;
      tag: string;
      review: string;
      id?: string | null;
    }[];
  };
  brands: {
    brand: {
      image: string | Media;
      id?: string | null;
    }[];
  };
  top_products: {
    title: string;
    description: string;
    products: (string | Product)[];
  };
  cta_card: {
    title: string;
    description: string;
    button: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "about-us".
 */
export interface AboutUs {
  id: string;
  quote: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  sections: {
    title: string;
    description: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    };
    image: string | Media;
    id?: string | null;
  }[];
  closing: {
    title: string;
    description: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    };
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-us".
 */
export interface ContactUs {
  id: string;
  title: string;
  email: string;
  website: string;
  social_card: {
    title: string;
    description: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "company_select".
 */
export interface CompanySelect<T extends boolean = true> {
  name?: T;
  logo?: T;
  tagline?: T;
  catalogue?: T;
  email?: T;
  phone?: T;
  social_links?:
    | T
    | {
        icon?: T;
        link?: T;
        id?: T;
      };
  not_found_image?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "homepage_select".
 */
export interface HomepageSelect<T extends boolean = true> {
  hero?:
    | T
    | {
        title?: T;
        description?: T;
        button?: T;
        image?: T;
      };
  services?:
    | T
    | {
        service?:
          | T
          | {
              title?: T;
              description?: T;
              id?: T;
            };
      };
  introduction?:
    | T
    | {
        title?: T;
        description?: T;
        button?: T;
        image?: T;
      };
  numbers?:
    | T
    | {
        number?:
          | T
          | {
              title?: T;
              description?: T;
              id?: T;
            };
      };
  top_categories?:
    | T
    | {
        title?: T;
        description?: T;
        categories?: T;
      };
  testimonials?:
    | T
    | {
        title?: T;
        testimonial?:
          | T
          | {
              name?: T;
              image?: T;
              tag?: T;
              review?: T;
              id?: T;
            };
      };
  brands?:
    | T
    | {
        brand?:
          | T
          | {
              image?: T;
              id?: T;
            };
      };
  top_products?:
    | T
    | {
        title?: T;
        description?: T;
        products?: T;
      };
  cta_card?:
    | T
    | {
        title?: T;
        description?: T;
        button?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "about-us_select".
 */
export interface AboutUsSelect<T extends boolean = true> {
  quote?: T;
  sections?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
        id?: T;
      };
  closing?:
    | T
    | {
        title?: T;
        description?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-us_select".
 */
export interface ContactUsSelect<T extends boolean = true> {
  title?: T;
  email?: T;
  website?: T;
  social_card?:
    | T
    | {
        title?: T;
        description?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}