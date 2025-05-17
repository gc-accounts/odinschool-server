import type { Schema, Struct } from '@strapi/strapi';

export interface NewStudentsEnrolled extends Struct.ComponentSchema {
  collectionName: 'components_new_students_enrolleds';
  info: {
    displayName: 'Students enrolled';
  };
  attributes: {
    enrolled_avatars: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    total_enrolled: Schema.Attribute.Integer;
  };
}

export interface PropertiesCurriculum extends Struct.ComponentSchema {
  collectionName: 'components_properties_curricula';
  info: {
    description: '';
    displayName: 'Curriculum';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    lessons: Schema.Attribute.Integer;
  };
}

export interface PropertiesFile extends Struct.ComponentSchema {
  collectionName: 'components_properties_files';
  info: {
    displayName: 'File';
    icon: 'file';
  };
  attributes: {};
}

export interface PropertiesJoinedStudents extends Struct.ComponentSchema {
  collectionName: 'components_properties_joined_students';
  info: {
    displayName: 'Joined Students';
    icon: 'bulletList';
  };
  attributes: {};
}

export interface PropertiesRating extends Struct.ComponentSchema {
  collectionName: 'components_properties_ratings';
  info: {
    displayName: 'rating';
    icon: 'star';
  };
  attributes: {
    overall_rating: Schema.Attribute.Decimal;
    total_rated: Schema.Attribute.Integer;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'new.students-enrolled': NewStudentsEnrolled;
      'properties.curriculum': PropertiesCurriculum;
      'properties.file': PropertiesFile;
      'properties.joined-students': PropertiesJoinedStudents;
      'properties.rating': PropertiesRating;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
