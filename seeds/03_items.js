'use strict'

exports.seed = (knex, Promise) => {
  return Promise.all([
    // Inserts seed entries
    knex('items').insert({
      id: 1,
      user_id: 1,
      category_id: 1,
      name: 'Backyard',
      description: '1/8th of an acre space. Backs up to the local golf course. Includes small brick patio with table and chairs to seat 4. Great space for birthday parties or small wedding reception. Friendly neighbors.',
      reserved: false
    }),
    knex('items').insert({
      id: 2,
      user_id: 2,
      category_id: 2,
      name: 'Carpet Cleaner',
      description: 'Hoover carpet cleaner, 2 years old, runs like new, SpinScrub Technology, Quick Dry.',
      reserved: false
    }),
    knex('items').insert({
      id: 3,
      user_id: 3,
      category_id: 3,
      name: 'Golf clubs',
      description: 'Titleist 712 AP2, 3iron - PW, True Temper steel shafts. Great for the low to scratch player. Awesome workability yet great forgiveness on off center shots.',
      reserved: false
    }),
    knex('items').insert({
      id: 4,
      user_id: 1,
      category_id: 4,
      name: 'BBQ Grill',
      description: 'Weber E-310 Propane Gas Grill. Equip with 3 powerful stainless steel burners with 2 side tables for food prep and a warming rack.',
      reserved: false
    }),
    knex('items').insert({
      id: 5,
      user_id: 2,
      category_id: 1,
      name: 'Conference Room',
      description: 'Sun-washed room, includes large table that will comfortablly seat 10. Perfect for meetings, work sessions, or retreats.',
      reserved: true
    }),
    knex('items').insert({
      id: 6,
      user_id: 2,
      category_id: 2,
      name: 'Step Ladder',
      description: '4.5 ft. Gorilla ladder. Aluminum with tray and 250lbs capacity. Great for changing light bulbs or cleaning hard to reach areas.',
      reserved: true
    }),
    knex('items').insert({
      id: 7,
      user_id: 3,
      category_id: 3,
      name: 'Tennis Racquet',
      description: 'Burn 100S CV Black Wilson raquet. Standard 27in length. Awesome raquet for beginner players. Great for recreational play.',
      reserved: true
    }),
    knex('items').insert({
      id: 8,
      user_id: 1,
      category_id: 4,
      name: 'Patio Umbrella',
      description: 'Hampton Bay 10ft by 6ft aluminum umbrella with push-button tilt and stand. Perfect for providing shade on hot summer days.',
      reserved: true
    })
  ]).then(() => {
    return knex.raw(`SELECT setval('items_id_seq', (SELECT MAX(id) FROM items))`)
  })
}
