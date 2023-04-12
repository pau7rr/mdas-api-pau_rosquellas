import amqp, { Message } from 'amqplib/callback_api'
import AddPokemonFavouritedTimesUseCase from '../../application/use-cases/add-pokemonFavouritedTimes.use-case'
import InMemoryPokemonFavouritesRepository from '../repositories/in-memory-pokemon-favourites.repository'

const createMQConsumer = (amqpURl: string, queueName: string) => {
  const repository = InMemoryPokemonFavouritesRepository.getInstance()
  const addPokemonFavouritedTimesUseCase = new AddPokemonFavouritedTimesUseCase(repository)

  console.log('Connecting to RabbitMQ...')
  return () => {
    amqp.connect(amqpURl, (errConn, conn) => {
      if (errConn) {
        throw errConn
      }

      conn.createChannel((errChan, chan) => {
        if (errChan) {
          throw errChan
        }

        console.log('Connected to RabbitMQ')
        chan.assertQueue(queueName, { durable: true })
        chan.consume(queueName, (msg: Message | null) => {
          if (msg) {
            const parsed = JSON.parse(msg.content.toString())
            switch (parsed.action) {
              case 'FAVOURITE':
                addPokemonFavouritedTimesUseCase.execute(+parsed.data.pokemonId)
                break
              default:
                break
            }
          }
        }, { noAck: true })
      })
    })
  }
}

export default createMQConsumer