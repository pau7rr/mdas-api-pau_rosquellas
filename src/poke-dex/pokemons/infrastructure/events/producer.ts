import amqp, { Connection } from 'amqplib/callback_api'

const createMQProducer = (amqpUrl: string, queueName: string) => {
  let ch: any
  amqp.connect(amqpUrl, (errorConnect: Error, connection: Connection) => {
    if (errorConnect) {
      console.log('Error connecting to RabbitMQ: ', errorConnect)
      return
    }

    connection.createChannel((errorChannel, channel) => {
      if (errorChannel) {
        console.log('Error creating channel: ', errorChannel)
        return
      }

      ch = channel
    })
  })
  return (msg: string) => {
    ch.sendToQueue(queueName, Buffer.from(msg))
  }
}

export default createMQProducer