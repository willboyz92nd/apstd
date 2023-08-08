ServerEvents.recipes(event => {
    event.remove({ output: 'alloy_forgery:deepslate_bricks_forge_controller' })
    event.shaped('bosses_of_mass_destruction:obsidilith_end_frame', [
      'OSO',
      'OEO',
      'OOO'
    ], {
      S: 'minecraft:nether_star',
      O: 'minecraft:obsidian',
      E: 'botania:ender_eye_block'
    })
    event.shaped('alloy_forgery:deepslate_bricks_forge_controller', [
      'ADA',
      'SES',
      'ASA'
    ], {
      E: 'minecraft:nether_star',
      A: 'mythicmetals:adamantite_ingot',
      D: 'minecraft:dragon_egg',
      S: 'minecraft:deepslate_bricks'
    })
    event.shaped('kubejs:pearl4', [
      'ADA',
      'DED',
      'ASA'
    ], {
      E: 'kubejs:pearl3',
      A: 'minecraft:nether_star',
      D: 'mysticalagriculture:awakened_supremium_block',
      S: 'bosses_of_mass_destruction:blazing_eye'
    })
    event.shaped('kubejs:pearl3', [
      'ADA',
      'DED',
      'ASA'
    ], {
      E: 'kubejs:pearl2',
      A: 'minecraft:nether_star',
      D: 'mythicmetals:metallurgium_ingot',
      S: 'bosses_of_mass_destruction:obsidian_heart'
    })
    event.shaped('kubejs:pearl2', [
      'DDD',
      'DED',
      'ASA'
    ], {
      E: 'kubejs:pearl1',
      A: 'minecraft:nether_star',
      D: 'mythicmetals:celestium_ingot',
      S: 'bosses_of_mass_destruction:ancient_anima'
    })
    event.shaped('kubejs:pearl1', [
      'DDD',
      'DAD',
      'DSD'
    ], {
      A: 'minecraft:nether_star',
      D: 'mythicmetals:hallowed_ingot',
      S: 'bosses_of_mass_destruction:void_thorn'
    })


  })

