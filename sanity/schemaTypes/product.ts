export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'name of product',
    },
    {
      name: 'images',
      type: 'array',
      title: 'images of product',
      of: [{type: 'image'}],
    },
  ],
}
