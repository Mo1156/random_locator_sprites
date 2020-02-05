sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    RandomSprite.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
let RandomSprite: Sprite = null
RandomSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . 2 2 2 . . . . . . 2 . . . . 
. . 2 . . . . . . . 2 2 . . . . 
. . 2 . . e . . e . 2 2 2 . . . 
. . 2 . . e . . e . . 2 2 . . . 
. 2 2 . . e . . e . . 2 2 . . . 
. 2 . . . . . . . . . . 2 . . . 
. 2 . . . e e e e . . . 2 . . . 
. 2 2 . . . . . . . . . 2 . . . 
. . 2 2 2 2 . . . . . 2 2 . . . 
. . . . . 2 . 2 2 2 2 2 . . . . 
. . . . . 2 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
RandomSprite.setPosition(82, 71)
let rock = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . e e . . . . 
. . . e e e e e e e e e . . . . 
. . e 4 4 4 4 4 e e e e e . . . 
. . e 4 4 f f 4 4 4 e e e . . . 
. e e 4 f f d d f 4 4 4 e e . . 
. e e 4 f f f d f f f 4 4 e . . 
e e e 4 f f d d d d d d 4 4 . . 
e e e 4 4 4 4 4 4 4 d 4 4 4 . . 
. . e e e e e e e 4 4 4 4 e . . 
. . . . . e e e e e e . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
game.splash("this is my rock game")
