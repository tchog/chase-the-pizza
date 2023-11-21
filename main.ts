sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    info.startCountdown(5)
})
let pizza: Sprite = null
scene.setBackgroundColor(13)
let mySprite = sprites.create(assets.image`BoB Pizzaiolo`, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 5 5 5 2 e 4 e 4 4 b . 
    . . . b d 2 e e e 5 5 4 e 4 4 e 
    . . . b 5 e 2 5 5 5 5 e e e e e 
    . . b d 5 e 5 5 5 e 2 2 5 e e e 
    . . b 5 2 5 5 5 e 2 2 5 5 d e e 
    . b 5 2 5 5 5 e 2 5 5 5 d d e 4 
    . b 5 5 e 2 2 2 2 5 5 d d e 4 . 
    b d 5 2 2 5 5 5 d d d 4 4 . . . 
    b e 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.Food)
