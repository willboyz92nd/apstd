ServerEvents.recipes(event => {
  
    event.remove({ output: 'alloy_forgery:deepslate_bricks_forge_controller' })
    event.remove({ output: 'techreborn:nanosaber' })
    event.remove({ output: 'botania:terrasteel_block'})
    
    event.remove({ output: 'mythicmetals:metallurgium_helmet'})
    event.remove({ output: 'mythicmetals:metallurgium_chestplate'})
    event.remove({ output: 'mythicmetals:metallurgium_leggings'})
    event.remove({ output: 'mythicmetals:metallurgium_boots'})
    event.remove({ output: 'mythicmetals:metallurgium_sword'})
    event.remove({ output: 'mythicmetals:metallurgium_pickaxe'})
    event.remove({ output: 'mythicmetals:metallurgium_axe'})
    event.remove({ output: 'mythicmetals:metallurgium_shovel'})
    event.remove({ output: 'mythicmetals:metallurgium_hoe'})

    event.remove({ output: 'mysticalagriculture:inferium_ingot'})
    event.remove({ output: 'mysticalagriculture:prudentium_ingot'})
    event.remove({ output: 'mysticalagriculture:tertium_ingot'})
    event.remove({ output: 'mysticalagriculture:supremium_ingot'})
    event.remove({ output: 'mysticalagriculture:imperium_ingot'})

    event.remove({ output: 'mythicmetals:celestium_helmet'})
    event.remove({ output: 'mythicmetals:celestium_chestplate'})
    event.remove({ output: 'mythicmetals:celestium_leggings'})
    event.remove({ output: 'mythicmetals:celestium_boots'})
    event.remove({ output: 'mythicmetals:celestium_sword'})
    event.remove({ output: 'mythicmetals:celestium_pickaxe'})
    event.remove({ output: 'mythicmetals:celestium_axe'})
    event.remove({ output: 'mythicmetals:celestium_shovel'})
    event.remove({ output: 'mythicmetals:celestium_hoe'})

    event.remove({ output: 'mythicmetals:hallowed_helmet'})
    event.remove({ output: 'mythicmetals:hallowed_chestplate'})
    event.remove({ output: 'mythicmetals:hallowed_leggings'})
    event.remove({ output: 'mythicmetals:hallowed_boots'})
    event.remove({ output: 'mythicmetals:hallowed_sword'})
    event.remove({ output: 'mythicmetals:hallowed_pickaxe'})
    event.remove({ output: 'mythicmetals:hallowed_axe'})
    event.remove({ output: 'mythicmetals:hallowed_shovel'})
    event.remove({ output: 'mythicmetals:hallowed_hoe'})

    event.remove({ output: 'dml-refabricated:glitch_leggings'})
    event.remove({ output: 'dml-refabricated:glitch_helmet'})
    event.remove({ output: 'dml-refabricated:glitch_chestplate'})
    event.remove({ output: 'dml-refabricated:glitch_boots'})

    event.remove({ output: 'arclight:arclight_core' })

    event.remove({ output: 'arclight:arclight_boots' })
    event.remove({ output: 'arclight:arclight_leggings' })
    event.remove({ output: 'arclight:arclight_chestplate' })
    event.remove({ output: 'arclight:arclight_helmet' })
    
    event.remove({ output: 'arclight:steel_helmet' })
    event.remove({ output: 'arclight:steel_chestplate' })
    event.remove({ output: 'arclight:steel_leggings' })
    event.remove({ output: 'arclight:steel_boots' })

    event.remove({ output: 'arclight:moonlight_helmet' })
    event.remove({ output: 'arclight:moonlight_chestplate' })
    event.remove({ output: 'arclight:moonlight_leggings' })
    event.remove({ output: 'arclight:moonlight_boots' })

    event.remove({ output: 'arclight:shadow_helmet' })
    event.remove({ output: 'arclight:shadow_chestplate' })
    event.remove({ output: 'arclight:shadow_leggings' })
    event.remove({ output: 'arclight:shadow_boots' })

    event.remove({ output: 'arclight:holyknight_helmet' })
    event.remove({ output: 'arclight:holyknight_chestplate' })
    event.remove({ output: 'arclight:holyknight_leggings' })
    event.remove({ output: 'arclight:holyknight_boots' })

    event.remove({ output: 'arclight:scorpion_helmet' })
    event.remove({ output: 'arclight:scorpion_chestplate' })
    event.remove({ output: 'arclight:scorpion_leggings' })
    event.remove({ output: 'arclight:scorpion_boots' })

    event.remove({ output: 'arclight:frozen_helmet' })
    event.remove({ output: 'arclight:frozen_chestplate' })
    event.remove({ output: 'arclight:frozen_leggings' })
    event.remove({ output: 'arclight:frozen_boots' })

    event.remove({ output: 'arclight:angel_helmet' })
    event.remove({ output: 'arclight:angel_chestplate' })
    event.remove({ output: 'arclight:angel_leggings' })
    event.remove({ output: 'arclight:angel_boots' })

    event.remove({ output: 'dml-refabricated:deep_learner' })
    event.remove({ output: 'dml-refabricated:machine_casing'})
    event.remove({ output: 'dml-refabricated:soot_redstone'})
    event.remove({ output: 'dml-refabricated:matter_condenser'})
    event.remove({ output: 'dml-refabricated:simulation_chamber'})

    event.remove({ output: 'alloy_forgery:prismarine_bricks_forge_controller'})
    event.remove({ output: 'alloy_forgery:polished_blackstone_forge_controller'})
    event.remove({ output: 'alloy_forgery:end_stone_bricks_forge_controller'})
    event.remove({ output: 'alloy_forgery:bricks_forge_controller'})
    event.remove({ output: 'alloy_forgery:stone_bricks_forge_controller'})
    event.remove({ output: 'alloy_forgery:adamantite_block_forge_controller'})


    event.shaped('bosses_of_mass_destruction:obsidilith_end_frame', [
      'OSO',
      'OEO',
      'OOO'
    ], {
      S: 'minecraft:nether_star',
      O: 'minecraft:obsidian',
      E: 'botania:ender_eye_block'
    })
    event.shaped('dml-refabricated:simulation_chamber', [
      'OSO',
      'SES',
      'OSO'
    ], {
      S: 'conjuring:conjuration_essence',
      O: 'conjuring:stabilized_conjuring_focus',
      E: 'dml-refabricated:machine_casing'
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
    event.shaped('dml-refabricated:machine_casing', [
      'PIP',
      'IAI',
      'PIP'
    ], {
      A: 'dml-refabricated:soot_redstone',
      P: 'kubejs:pearl1',
      I: 'dml-refabricated:soot_plate'
    })
    event.shaped('dml-refabricated:soot_redstone', 4[
      'AIA',
      'IAI',
      'AIA'
    ], {
      A: 'indrev:enriched_nikolite_ingot',
      I: 'minecraft:redstone'
    })
    event.shaped('arclight:arclight_core', [
      'TAT',
      'MAS',
      'TFT'
    ], {
      A: 'arclight:angel_feather',
      M: 'arclight:moonlight_core',
      S: 'arclight:shadow_core',
      F: 'arclight:frosted_core',
      T: 'botania:terrasteel_block'
    })
    
    event.smithing(
      'mythicmetals:hallowed_helmet',  // arg 1: output
      'minecraft:netherite_helmet', // arg 2: the item to be upgraded
      'kubejs:pearl1'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:hallowed_chestplate',  // arg 1: output
      'minecraft:netherite_chestplate', // arg 2: the item to be upgraded
      'kubejs:pearl1'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:hallowed_leggings',  // arg 1: output
      'minecraft:netherite_leggings', // arg 2: the item to be upgraded
      'kubejs:pearl1'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:hallowed_boots',  // arg 1: output
      'minecraft:netherite_boots', // arg 2: the item to be upgraded
      'kubejs:pearl1'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:hallowed_sword',  // arg 1: output
      'minecraft:netherite_sword', // arg 2: the item to be upgraded
      'kubejs:pearl1'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:hallowed_pickaxe',  // arg 1: output
      'minecraft:netherite_pickaxe', // arg 2: the item to be upgraded
      'kubejs:pearl1'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:hallowed_axe',  // arg 1: output
      'minecraft:netherite_axe', // arg 2: the item to be upgraded
      'kubejs:pearl1'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:hallowed_hoe',  // arg 1: output
      'minecraft:netherite_hoe', // arg 2: the item to be upgraded
      'kubejs:pearl1'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:hallowed_shovel',  // arg 1: output
      'minecraft:netherite_shovel', // arg 2: the item to be upgraded
      'kubejs:pearl1'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:celestium_helmet',  // arg 1: output
      'mythicmetals:hallowed_helmet', // arg 2: the item to be upgraded
      'kubejs:pearl2'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:celestium_chestplate',  // arg 1: output
      'mythicmetals:hallowed_chestplate', // arg 2: the item to be upgraded
      'kubejs:pearl2'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:celestium_leggings',  // arg 1: output
      'mythicmetals:hallowed_leggings', // arg 2: the item to be upgraded
      'kubejs:pearl2'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:celestium_boots',  // arg 1: output
      'mythicmetals:hallowed_boots', // arg 2: the item to be upgraded
      'kubejs:pearl2'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:celestium_sword',  // arg 1: output
      'mythicmetals:hallowed_sword', // arg 2: the item to be upgraded
      'kubejs:pearl2'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:celestium_pickaxe',  // arg 1: output
      'mythicmetals:hallowed_pickaxe', // arg 2: the item to be upgraded
      'kubejs:pearl2'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:celestium_axe',  // arg 1: output
      'mythicmetals:hallowed_axe', // arg 2: the item to be upgraded
      'kubejs:pearl2'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:celestium_hoe',  // arg 1: output
      'mythicmetals:hallowed_hoe', // arg 2: the item to be upgraded
      'kubejs:pearl2'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:celestium_shovel',  // arg 1: output
      'mythicmetals:hallowed_shovel', // arg 2: the item to be upgraded
      'kubejs:pearl2'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:celestium_chestplate',  // arg 1: output
      'mythicmetals:hallowed_chestplate', // arg 2: the item to be upgraded
      'kubejs:pearl2'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:celestium_leggings',  // arg 1: output
      'mythicmetals:hallowed_leggings', // arg 2: the item to be upgraded
      'kubejs:pearl2'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:celestium_boots',  // arg 1: output
      'mythicmetals:hallowed_boots', // arg 2: the item to be upgraded
      'kubejs:pearl2'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:celestium_sword',  // arg 1: output
      'mythicmetals:hallowed_sword', // arg 2: the item to be upgraded
      'kubejs:pearl2'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:celestium_pickaxe',  // arg 1: output
      'mythicmetals:hallowed_pickaxe', // arg 2: the item to be upgraded
      'kubejs:pearl2'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:celestium_axe',  // arg 1: output
      'mythicmetals:hallowed_axe', // arg 2: the item to be upgraded
      'kubejs:pearl2'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:celestium_hoe',  // arg 1: output
      'mythicmetals:hallowed_hoe', // arg 2: the item to be upgraded
      'kubejs:pearl2'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:celestium_shovel',  // arg 1: output
      'mythicmetals:hallowed_shovel', // arg 2: the item to be upgraded
      'kubejs:pearl2'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:metallurgium_helmet',  // arg 1: output
      'mythicmetals:celestium_helmet', // arg 2: the item to be upgraded
      'kubejs:pearl3'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:metallurgium_chestplate',  // arg 1: output
      'mythicmetals:celestium_chestplate', // arg 2: the item to be upgraded
      'kubejs:pearl3'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:metallurgium_leggings',  // arg 1: output
      'mythicmetals:celestium_leggings', // arg 2: the item to be upgraded
      'kubejs:pearl3'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:metallurgium_boots',  // arg 1: output
      'mythicmetals:celestium_boots', // arg 2: the item to be upgraded
      'kubejs:pearl3'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:metallurgium_sword',  // arg 1: output
      'mythicmetals:celestium_sword', // arg 2: the item to be upgraded
      'kubejs:pearl3'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:metallurgium_pickaxe',  // arg 1: output
      'mythicmetals:celestium_pickaxe', // arg 2: the item to be upgraded
      'kubejs:pearl3'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:metallurgium_axe',  // arg 1: output
      'mythicmetals:celestium_axe', // arg 2: the item to be upgraded
      'kubejs:pearl3'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:metallurgium_hoe',  // arg 1: output
      'mythicmetals:celestium_hoe', // arg 2: the item to be upgraded
      'kubejs:pearl3'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:metallurgium_shovel',  // arg 1: output
      'mythicmetals:celestium_shovel', // arg 2: the item to be upgraded
      'kubejs:pearl3'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:metallurgium_chestplate',  // arg 1: output
      'mythicmetals:celestium_chestplate', // arg 2: the item to be upgraded
      'kubejs:pearl3'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:metallurgium_leggings',  // arg 1: output
      'mythicmetals:celestium_leggings', // arg 2: the item to be upgraded
      'kubejs:pearl3'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:metallurgium_boots',  // arg 1: output
      'mythicmetals:celestium_boots', // arg 2: the item to be upgraded
      'kubejs:pearl3'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:metallurgium_sword',  // arg 1: output
      'mythicmetals:celestium_sword', // arg 2: the item to be upgraded
      'kubejs:pearl3'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:metallurgium_pickaxe',  // arg 1: output
      'mythicmetals:celestium_pickaxe', // arg 2: the item to be upgraded
      'kubejs:pearl3'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:metallurgium_axe',  // arg 1: output
      'mythicmetals:celestium_axe', // arg 2: the item to be upgraded
      'kubejs:pearl3'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:metallurgium_hoe',  // arg 1: output
      'mythicmetals:celestium_hoe', // arg 2: the item to be upgraded
      'kubejs:pearl3'   // arg 3: the upgrade item
    )
    event.smithing(
      'mythicmetals:metallurgium_shovel',  // arg 1: output
      'mythicmetals:celestium_shovel', // arg 2: the item to be upgraded
      'kubejs:pearl3'   // arg 3: the upgrade item
    )
    event.smithing(
      'arclight:angel_helmet',  // arg 1: output
      'mysticalagriculture:awakened_supremium_helmet', // arg 2: the item to be upgraded
      'arclight:arclight_core'   // arg 3: the upgrade item
    )
    event.smithing(
      'arclight:angel_chestplate',  // arg 1: output
      'mysticalagriculture:awakened_supremium_chestplate', // arg 2: the item to be upgraded
      'arclight:arclight_core'   // arg 3: the upgrade item
    )
    event.smithing(
      'arclight:angel_leggings',  // arg 1: output
      'mysticalagriculture:awakened_supremium_leggings', // arg 2: the item to be upgraded
      'arclight:arclight_core'   // arg 3: the upgrade item
    )
    event.smithing(
      'arclight:angel_boots',  // arg 1: output
      'mysticalagriculture:awakened_supremium_boots', // arg 2: the item to be upgraded
      'arclight:arclight_core'   // arg 3: the upgrade item
    )

    event.smithing(
      'arclight:angel_chestplate',  // arg 1: output
      'mysticalagriculture:awakened_supremium_chestplate', // arg 2: the item to be upgraded
      'arclight:arclight_core'   // arg 3: the upgrade item
    )
    event.smithing(
      'arclight:angel_leggings',  // arg 1: output
      'mysticalagriculture:awakened_supremium_leggings', // arg 2: the item to be upgraded
      'arclight:arclight_core'   // arg 3: the upgrade item
    )
    event.smithing(
      'arclight:angel_boots',  // arg 1: output
      'mysticalagriculture:awakened_supremium_boots', // arg 2: the item to be upgraded
      'arclight:arclight_core'   // arg 3: the upgrade item
    )

    event.shapeless(
      Item.of('mysticalagriculture:inferium_ingot', 1), // arg 1: output
      [ 
        'mysticalagriculture:prosperity_ingot',
        '2x mysticalagriculture:inferium_essence', 	//arg 2: the array of inputs
        'botania:terrasteel_ingot'
      ]
    )
    event.shapeless(
      Item.of('mysticalagriculture:prudentium_ingot', 1), // arg 1: output
      [ 
        'mysticalagriculture:inferium_ingot',
        '2x mysticalagriculture:prudentium_essence', 	//arg 2: the array of inputs
        'mythicmetals:orichalcum_ingot'
      ]
    )
    event.shapeless(
      Item.of('mysticalagriculture:tertium_ingot', 1), // arg 1: output
      [ 
        'mysticalagriculture:prudentium_ingot',
        '2x mysticalagriculture:tertium_essence', 	//arg 2: the array of inputs
        'arclight:almandine_ingot'
      ]
    )
    event.shapeless(
      Item.of('mysticalagriculture:imperium_ingot', 1), // arg 1: output
      [ 
        'mysticalagriculture:tertium_ingot',
        '2x mysticalagriculture:imperium_essence', 	//arg 2: the array of inputs
        'indrev:enriched_nikolite_ingot'
      ]
    )
    event.shapeless(
      Item.of('mysticalagriculture:supremium_ingot', 1), // arg 1: output
      [ 
        'mysticalagriculture:imperium_ingot',
        '2x mysticalagriculture:supremium_essence', 	//arg 2: the array of inputs
        'mythicmetals:carmot_ingot'
      ]
    )
    event.shapeless(
      Item.of('mysticalagriculture:awakened_supremium_ingot', 1), // arg 1: output
      [ 
        'mysticalagriculture:supremium_ingot',
        '2x mysticalagriculture:awakened_supremium_essence', 	//arg 2: the array of inputs
        'mythicmetals:carmot_ingot'
      ]
    )
    
  }

)

