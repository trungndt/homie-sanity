export default {
  name: 'booking',
  type: 'document',
  title: 'Booking Submissions',
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'email', type: 'string', title: 'Email' },
    { name: 'phone', type: 'string', title: 'Phone' },
    { name: 'message', type: 'text', title: 'Message' },
    { name: 'submittedAt', type: 'datetime', title: 'Submitted At', initialValue: () => new Date().toISOString() }
  ]
}
