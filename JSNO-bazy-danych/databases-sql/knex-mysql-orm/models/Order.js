import { Model } from 'objection';
import { User } from './User.js'

export class Order extends Model {
	static get tableName() {
		return 'orders';
	}

	static get relationMappings() {
		return {
			user: {
				relation: Model.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: 'orders.user_id',
					to: 'users.id'
				}
			}
		}
	}
}
