// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Event, Comment, Post } = initSchema(schema);

export {
  Event,
  Comment,
  Post
};