'use strict'

exports.seed = (knex, Promise) => {
  return Promise.all([
    // Inserts seed entries
    knex('items').insert({
      id: 1,
      user_id: 1,
      category_id: 1,
      name: 'Backyard',
      description: '1/8th of an acre space. Includes patio with table and chairs to seat 4. Great space for birthday parties or small wedding reception. Friendly neighbors.',
      photo: 'http://www.byrneseyeview.com/wp-content/uploads/2017/03/garage-roof-deck-contemporary-with-decks-los-altos-san-francisco-siding-and-exterior-contractors.jpg',
      reserved: false
    }),
    knex('items').insert({
      id: 2,
      user_id: 2,
      category_id: 2,
      name: 'Carpet Cleaner',
      description: 'Hoover carpet cleaner, 2 years old, runs like new, SpinScrub Technology, Quick Dry.',
      photo: 'https://celexa-generic.us/wp-content/uploads/2018/03/Hoover-Steamvac-Carpet-Cleaner-Parts-700x1043.jpg',
      reserved: false
    }),
    knex('items').insert({
      id: 3,
      user_id: 3,
      category_id: 3,
      name: 'Golf clubs',
      description: 'Titleist 712 AP2, 3iron - PW, True Temper steel shafts. Great for the low to scratch player. Awesome workability yet great forgiveness on off center shots.',
      photo: 'https://i.ebayimg.com/images/g/ZzIAAOSwnkdajsgQ/s-l300.jpg',
      reserved: false
    }),
    knex('items').insert({
      id: 4,
      user_id: 1,
      category_id: 4,
      name: 'BBQ Grill',
      description: 'Weber E-310 Propane Gas Grill. Equip with 3 powerful stainless steel burners with 2 side tables for food prep and a warming rack.',
      photo: 'https://www.yourplace4.com/wp-content/uploads/2013/11/weber1.jpg',
      reserved: false
    }),
    knex('items').insert({
      id: 5,
      user_id: 2,
      category_id: 1,
      name: 'Conference Room',
      description: 'Sun-washed room, includes large table that will comfortablly seat 10. Perfect for meetings, work sessions, or retreats.',
      photo: 'https://www.virgobc.com/wp-content/uploads/2014/10/virgo-midtown-columbus-meeting-room-800.jpg',
      reserved: false
    }),
    knex('items').insert({
      id: 6,
      user_id: 2,
      category_id: 2,
      name: 'Step Ladder',
      description: '4.5 ft. Gorilla ladder. Aluminum with tray and 250lbs capacity. Great for changing light bulbs or cleaning hard to reach areas.',
      photo: 'https://images-na.ssl-images-amazon.com/images/I/51HZ2EszszL._SX425_.jpg',
      reserved: false
    }),
    knex('items').insert({
      id: 7,
      user_id: 3,
      category_id: 3,
      name: 'Tennis Racquet',
      description: 'Burn 100S CV Black Wilson raquet. Standard 27in length. Awesome raquet for beginner players. Great for recreational play.',
      photo: 'https://www.picclickimg.com/d/l400/pict/253444898868_/Used-Wilson-2016-Burn-100-Countervail-Grip-4-1-4.jpg',
      reserved: false
    }),
    knex('items').insert({
      id: 8,
      user_id: 1,
      category_id: 4,
      name: 'Patio Umbrella',
      description: 'Hampton Bay 10ft by 6ft aluminum umbrella with push-button tilt and stand. Perfect for providing shade on hot summer days.',
      photo: 'https://s-media-cache-ak0.pinimg.com/originals/b5/4e/08/b54e0885753194a98f7af82dc1d3dee8.jpg',
      reserved: false
    })
  ]).then(() => {
    return knex.raw(`SELECT setval('items_id_seq', (SELECT MAX(id) FROM items))`)
  })
}
