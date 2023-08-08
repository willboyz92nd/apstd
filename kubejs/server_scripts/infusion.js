ServerEvents.recipes(event => {
    event.remove({ output: 'mysticalagriculture:awakened_supremium_boots' })
    event.remove({ output: 'mysticalagriculture:awakened_supremium_leggings' })
    event.remove({ output: 'mysticalagriculture:awakened_supremium_chestplate' })
    event.remove({ output: 'mysticalagriculture:awakened_supremium_helmet' })

    event.remove({ output: 'mysticalagriculture:awakened_supremium_sword' })
    event.remove({ output: 'mysticalagriculture:awakened_supremium_pickaxe' })
    event.remove({ output: 'mysticalagriculture:awakened_supremium_shovel' })
    event.remove({ output: 'mysticalagriculture:awakened_supremium_axe' })
    event.remove({ output: 'mysticalagriculture:awakened_supremium_hoe' })

    event.custom({
        "type": "mysticalagriculture:awakening",
        "transfer_nbt": true,
        "essences": {
          "air": 40,
          "earth": 40,
          "water": 40,
          "fire": 40
        },
        "input": {
          "item": "mythicmetals:metallurgium_boots"
        },
        "ingredients": [
          {
            "item": "mysticalagriculture:supremium_boots"
          },
          {
            "item": "mysticalagriculture:awakened_supremium_ingot"
          },
          {
            "item": "kubejs:pearl4"
          },
          {
            "item": "mysticalagriculture:awakened_supremium_ingot"
          },
          {
            "item": "kubejs:pearl4"
          },
        ],
        "result": {
          "item": "mysticalagriculture:awakened_supremium_boots"
        }
      })
      event.custom({
        "type": "mysticalagriculture:awakening",
        "transfer_nbt": true,
        "essences": {
          "air": 40,
          "earth": 40,
          "water": 40,
          "fire": 40
        },
        "input": {
          "item": "mythicmetals:metallurgium_leggings"
        },
        "ingredients": [
          {
            "item": "mysticalagriculture:supremium_leggings"
          },
          {
            "item": "mysticalagriculture:awakened_supremium_ingot"
          },
          {
            "item": "kubejs:pearl4"
          },
          {
            "item": "mysticalagriculture:awakened_supremium_ingot"
          },
          {
            "item": "kubejs:pearl4"
          },
        ],
        "result": {
          "item": "mysticalagriculture:awakened_supremium_leggings"
        }
      })

      event.custom({
        "type": "mysticalagriculture:awakening",
        "transfer_nbt": true,
        "essences": {
          "air": 40,
          "earth": 40,
          "water": 40,
          "fire": 40
        },
        "input": {
          "item": "mythicmetals:metallurgium_chestplate"
        },
        "ingredients": [
          {
            "item": "mysticalagriculture:supremium_chestplate"
          },
          {
            "item": "mysticalagriculture:awakened_supremium_ingot"
          },
          {
            "item": "kubejs:pearl4"
          },
          {
            "item": "mysticalagriculture:awakened_supremium_ingot"
          },
          {
            "item": "kubejs:pearl4"
          },
        ],
        "result": {
          "item": "mysticalagriculture:awakened_supremium_chestplate"
        }
      })

      event.custom({
        "type": "mysticalagriculture:awakening",
        "transfer_nbt": true,
        "essences": {
          "air": 40,
          "earth": 40,
          "water": 40,
          "fire": 40
        },
        "input": {
          "item": "mythicmetals:metallurgium_helmet"
        },
        "ingredients": [
          {
            "item": "mysticalagriculture:supremium_helmet"
          },
          {
            "item": "mysticalagriculture:awakened_supremium_ingot"
          },
          {
            "item": "kubejs:pearl4"
          },
          {
            "item": "mysticalagriculture:awakened_supremium_ingot"
          },
          {
            "item": "kubejs:pearl4"
          },
        ],
        "result": {
          "item": "mysticalagriculture:awakened_supremium_helmet"
        }
      })
      event.custom({
        "type": "mysticalagriculture:awakening",
        "transfer_nbt": true,
        "essences": {
          "air": 40,
          "earth": 40,
          "water": 40,
          "fire": 40
        },
        "input": {
          "item": "mythicmetals:metallurgium_sword"
        },
        "ingredients": [
          {
            "item": "mysticalagriculture:supremium_sword"
          },
          {
            "item": "mysticalagriculture:awakened_supremium_ingot"
          },
          {
            "item": "kubejs:pearl4"
          },
          {
            "item": "mysticalagriculture:awakened_supremium_ingot"
          },
          {
            "item": "kubejs:pearl4"
          },
        ],
        "result": {
          "item": "mysticalagriculture:awakened_supremium_sword"
        }
      })
      event.custom({
        "type": "mysticalagriculture:awakening",
        "transfer_nbt": true,
        "essences": {
          "air": 40,
          "earth": 40,
          "water": 40,
          "fire": 40
        },
        "input": {
          "item": "mythicmetals:metallurgium_pickaxe"
        },
        "ingredients": [
          {
            "item": "mysticalagriculture:supremium_pickaxe"
          },
          {
            "item": "mysticalagriculture:awakened_supremium_ingot"
          },
          {
            "item": "kubejs:pearl4"
          },
          {
            "item": "mysticalagriculture:awakened_supremium_ingot"
          },
          {
            "item": "kubejs:pearl4"
          },
        ],
        "result": {
          "item": "mysticalagriculture:awakened_supremium_pickaxe"
        }
      })
      event.custom({
        "type": "mysticalagriculture:awakening",
        "transfer_nbt": true,
        "essences": {
          "air": 40,
          "earth": 40,
          "water": 40,
          "fire": 40
        },
        "input": {
          "item": "mythicmetals:metallurgium_shovel"
        },
        "ingredients": [
          {
            "item": "mysticalagriculture:supremium_shovel"
          },
          {
            "item": "mysticalagriculture:awakened_supremium_ingot"
          },
          {
            "item": "kubejs:pearl4"
          },
          {
            "item": "mysticalagriculture:awakened_supremium_ingot"
          },
          {
            "item": "kubejs:pearl4"
          },
        ],
        "result": {
          "item": "mysticalagriculture:awakened_supremium_shovel"
        }
      })
      event.custom({
        "type": "mysticalagriculture:awakening",
        "transfer_nbt": true,
        "essences": {
          "air": 40,
          "earth": 40,
          "water": 40,
          "fire": 40
        },
        "input": {
          "item": "mythicmetals:metallurgium_pickaxe"
        },
        "ingredients": [
          {
            "item": "mysticalagriculture:supremium_pickaxe"
          },
          {
            "item": "mysticalagriculture:awakened_supremium_ingot"
          },
          {
            "item": "kubejs:pearl4"
          },
          {
            "item": "mysticalagriculture:awakened_supremium_ingot"
          },
          {
            "item": "kubejs:pearl4"
          },
        ],
        "result": {
          "item": "mysticalagriculture:awakened_supremium_pickaxe"
        }
      })
      event.custom({
        "type": "mysticalagriculture:awakening",
        "transfer_nbt": true,
        "essences": {
          "air": 40,
          "earth": 40,
          "water": 40,
          "fire": 40
        },
        "input": {
          "item": "mythicmetals:metallurgium_hoe"
        },
        "ingredients": [
          {
            "item": "mysticalagriculture:supremium_hoe"
          },
          {
            "item": "mysticalagriculture:awakened_supremium_ingot"
          },
          {
            "item": "kubejs:pearl4"
          },
          {
            "item": "mysticalagriculture:awakened_supremium_ingot"
          },
          {
            "item": "kubejs:pearl4"
          },
        ],
        "result": {
          "item": "mysticalagriculture:awakened_supremium_hoe"
        }
      })
  })
