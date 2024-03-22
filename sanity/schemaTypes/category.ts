export default {
  name: 'category',
  type: 'document',
  title: 'Product category',
  fields: [
    {
      name: 'name',
      title: 'Name of category',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Category slug',
      options: {
        source: 'name',
      },
    },
  ],
}
