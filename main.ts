enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Placed = SpriteKind.create()
    export const Cursor = SpriteKind.create()
    export const Box = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
f f f f f f f f f f f f f f f f 
f f 1 f f f f e f f f f f f f f 
f f 1 1 1 1 1 1 f f f f f f f f 
f f f f f f f f f f f e f f f f 
f f f f f f f f f f f e f f f f 
f f f f f f f f f f f e f 1 1 f 
f f f f f f f f e f f f f f f f 
f f f f f f f f e e f f f f f f 
f f f f f f f e e e f f f f f f 
f f f e e e e e f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f 1 f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f e e f f f 
f f f f f f f f f f f f f f f f 
`
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Create_Object(tree, point.x, point.y)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Create_Object(house, point.x, point.y)
})
function Remove_Object (Object: Sprite) {
    Object.destroy()
    point.say("Remove", 500)
    music.pewPew.play()
}
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.Placed, function (sprite, otherSprite) {
    if (controller.left.isPressed() && controller.right.isPressed()) {
        Remove_Object(otherSprite)
    }
})
function Create_Object (Object: Sprite, positionx: number, positiony: number) {
    House_Placed = sprites.create(Object.image, SpriteKind.Placed)
    House_Placed.setPosition(positionx, positiony)
    point.say(sprites.readDataString(Object, "name"), 500)
    music.magicWand.play()
}
let House_Placed: Sprite = null
let tree: Sprite = null
let house: Sprite = null
let point: Sprite = null
blockSettings.writeString("villageName", "Thawin")
game.showLongText("Move Cursor   then press A = Create House,  B = Tree,      Left+Right(on Object) =     Remove Object", DialogLayout.Center)
let villageBanner = sprites.create(img`
5 5 5 5 5 5 5 5 5 4 
5 f f f f f f f 5 4 
5 5 5 5 5 5 5 5 5 4 
4 4 4 4 4 4 4 4 4 4 
`, SpriteKind.Player)
villageBanner.setPosition(50, 18)
sprites.setDataString(villageBanner, "villageName", blockSettings.readString("villageName"))
villageBanner.say("" + sprites.readDataString(villageBanner, "villageName") + " Village")
point = sprites.create(img`
3 3 . 3 3 
3 . . . 3 
. . 3 . . 
3 . . . 3 
3 3 . 3 3 
`, SpriteKind.Cursor)
controller.moveSprite(point)
point.z = 255
house = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . 8 a 8 a a 8 a 8 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . a a a 8 8 8 a a 8 a 8 a a a . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . a a a 8 a a 8 a 8 a a 8 8 8 a a 8 a a a . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 a a 8 a a 8 8 8 8 a 8 a a 8 a 8 8 8 8 a a 8 a a 8 . . . . . . . . . . . 
. . . . . . . . 8 8 8 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 8 8 8 . . . . . . . . 
. . . . . a a a 8 a a 8 a a 8 8 8 8 a a 8 a 8 a a 8 a 8 a a 8 8 8 8 a a 8 a a 8 a a a . . . . . 
. . . a a 8 8 8 8 a a 8 a a 8 a a 8 a a 8 8 8 a a 8 8 8 a a 8 a a 8 a a 8 a a 8 8 8 8 a a . . . 
d c c a a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a a c c d 
b c b 8 8 8 a a 8 a a 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 a a 8 a a 8 8 8 b c b 
d b b a a 8 a a 8 8 8 8 a a 8 a a 8 8 8 8 a 8 a a 8 a 8 8 8 8 a a 8 a a 8 8 8 8 a a 8 a a b b d 
d b b a a 8 a a 8 a a 8 a a 8 8 8 8 a a 8 a 8 a a 8 a 8 a a 8 8 8 8 a a 8 a a 8 a a 8 a a b b d 
d c c a a 8 8 8 8 a a 8 a a 8 a a 8 a a 8 8 8 a a 8 8 8 a a 8 a a 8 a a 8 a a 8 8 8 8 a a c c d 
b c b a a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a a b c b 
d b b 8 8 8 a a 8 a a 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 a a 8 a a 8 8 8 b b d 
d b b a a 8 a a 8 8 8 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 8 8 8 a a 8 a a b b d 
d c c a a 8 a a 8 a a 8 a a 8 a a 8 8 8 8 a 8 a a 8 a 8 8 8 8 a a 8 a a 8 a a 8 a a 8 a a c c d 
b c b a a 8 8 8 8 a a 8 a a 8 8 8 8 a a 8 8 8 a a 8 8 8 a a 8 8 8 8 a a 8 a a 8 8 8 8 a a b c b 
d b b a a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a a b b d 
d b b 8 8 8 a a 8 a a 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 a a 8 a a 8 8 8 b b d 
d c c a a 8 a a 8 8 8 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 8 8 8 a a 8 a a c c d 
b c b a a 8 a a 8 a a 8 a a 8 a a 8 a a 8 8 8 a a 8 8 8 a a 8 a a 8 a a 8 a a 8 a a 8 a a b c b 
d b b a a 8 8 8 8 a a 8 a a 8 a a 8 8 8 c c b b b b c c 8 8 8 a a 8 a a 8 a a 8 8 8 8 a a b b d 
d b b a a 8 a a 8 a a 8 a a 8 8 8 c c b b b b b b b b b b c c 8 8 8 a a 8 a a 8 a a 8 a a b b d 
d c c 8 8 8 a a 8 a a 8 8 8 c c b b b b b c c c c c c b b b b b c c 8 8 8 a a 8 a a 8 8 8 c c d 
b c b a a 8 a a 8 8 8 c c b b b b b c c b d d d d d d b c c b b b b b c c 8 8 8 a a 8 a a b c b 
d b b a a 8 a a c c b b b b b c c b d d d d d d d d d d d d b c c b b b b b c c a a 8 a a b b d 
d b b a a c c b b b b c c c b d d d d d d d d d d d d d d d d d d b c c c b b b b c c a a b b d 
d c c c b b b b c c c b d d d b c c b b b b b b b b b b b b c c b d d d b c c c b b b b c c c d 
c c c c c c c c b b b b b b b c b d d d d d d d d d d d d d d b c b b b b b b b c c c c c c c c 
b d d d d d d d d d d d d b c d d d d d d d d d d d d d d d d d d c b d d d d d d d d d d d d b 
b b c b d d d d d d d d d c b d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d b c d d d d d d d d d b c b b 
b b b c c c c c c c c c c c d 1 b b b b b b b b b b b b b b b b 1 d c c c c c c c c c c c b b b 
b b b b d d d d d d d d d c 1 1 b e e e e e e e e e e e e e e b 1 1 c d d d d d d d d d b b b b 
b b b 8 a a a a a a a 8 d c 1 b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b 1 c d 8 a a a a a a a 8 b b b 
b b b 8 8 8 8 8 8 8 8 8 d c 1 b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b 1 c d 8 8 8 8 8 8 8 8 8 b b b 
b b b 8 3 3 3 3 3 3 3 8 d c b b f 3 b 3 e f f f f f f e 3 3 b e b b c d 8 3 3 3 3 3 3 3 8 b b b 
b b b 8 3 f f 3 f f 3 8 d c b b f 3 b f f f f f f f f f f 3 b e b b c d 8 3 f f 3 f f 3 8 b b b 
b b b 8 3 c c 3 c c 3 8 d c b b f 3 e f f f f f f f f f f e b e b b c d 8 3 c c 3 c c 3 8 b b b 
b b b 8 3 3 3 3 3 3 3 8 d c b b f 3 e e e e e e e e e e e e b e b b c d 8 3 3 3 3 3 3 3 8 b b b 
c b b 8 3 f f 3 f f 3 8 d c b b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d 8 3 f f 3 f f 3 8 b b c 
c b b 8 3 c c 3 c c 3 8 d c b b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d 8 3 c c 3 c c 3 8 b b c 
c c b b b b b b b b b b d c b b e 3 b 3 3 b 3 3 b 3 3 f e e e e b b c d b b b b b b b b b b c c 
. c b b d d d d d d d d d c b b e 3 b 3 3 b 3 3 b 3 3 f f f f e b b c d d d d d d d d d b b c . 
. . c b d b b b d b b b d c b b f 3 b 3 3 b 3 3 b 3 3 f 3 3 f e b b c d b b b d b b b d b c . . 
. . . c d b b b d b b b d c b b f 3 b 3 3 b 3 3 b 3 3 b f f e e b b c d b b b d b b b d c . . . 
. . . . b d d d d d d d d c b b f 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d d d d d d d d b . . . . 
. . . . . b d b b b d d d c b b f 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d d d b b b d b . . . . . 
. . . . . . b c c c b b b c b b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c b b b c c c b . . . . . . 
`, SpriteKind.Placed)
sprites.setDataString(house, "name", "House")
house.setFlag(SpriteFlag.Invisible, true)
tree = sprites.create(img`
. . . . . . . . . . . . . . . . 8 6 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 6 6 8 8 8 6 7 8 8 6 . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 6 6 6 8 7 7 6 8 8 8 6 8 . . . . . . . . . . . . 
. . . . . . . . . . . . 8 6 8 7 7 7 7 6 7 7 6 8 . . . . . . . . . . . . 
. . . . . . . . . 6 8 8 6 6 7 7 7 7 7 7 6 6 8 8 . . . . . . . . . . . . 
. . . . . . . . 6 7 7 6 7 7 7 7 7 7 7 7 7 8 6 6 6 . . . . . . . . . . . 
. . . . . . . . . 6 7 7 6 6 6 7 7 6 7 6 6 6 8 6 8 . . . . . . . . . . . 
. . . . . . . . . . 8 6 6 6 6 7 6 6 7 6 7 7 6 8 8 . . . . . . . . . . . 
. . . . . . . . . 8 6 6 6 6 6 6 6 6 6 6 6 7 7 7 8 . . . . . . . . . . . 
. . . . . . . . 6 6 7 7 6 6 6 6 6 6 6 6 6 6 6 6 7 6 . . . . . . . . . . 
. . . . . . . 6 7 7 6 6 6 6 7 6 6 6 7 7 6 6 6 7 7 7 6 . . . . . . . . . 
. . . . . . 8 8 6 6 6 7 7 7 6 6 7 6 7 7 7 6 6 6 6 8 8 . . . . . . . . . 
. . . . . 6 7 7 6 6 7 7 7 6 6 7 7 6 7 7 7 7 6 6 6 7 6 8 . . . . . . . . 
. . . . 6 7 7 6 6 6 6 6 6 6 7 7 7 6 6 7 7 7 6 6 6 6 7 7 6 . . . . . . . 
. . . . . 8 6 6 7 7 7 6 6 6 7 7 6 6 6 7 6 6 7 7 7 7 6 7 7 6 . . . . . . 
. . . . . . 8 7 7 7 6 6 6 6 6 6 6 6 7 7 7 6 7 7 7 7 7 6 6 8 8 . . . . . 
. . . . 6 8 8 7 7 6 6 7 7 6 6 7 7 6 7 7 7 7 7 7 7 7 7 7 6 7 7 6 . . . . 
. . 8 8 6 6 6 6 6 6 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 7 7 8 . . . 
. 8 6 6 6 6 6 6 6 7 7 7 6 6 7 7 6 7 7 7 7 7 6 6 6 6 6 7 7 6 6 6 8 . . . 
. . 8 8 6 7 7 6 6 6 6 6 6 7 7 7 6 7 7 6 7 7 6 6 6 6 6 7 7 7 6 6 6 8 . . 
. . 8 6 7 7 6 6 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 7 7 6 6 6 6 6 6 8 . . 
8 8 6 6 6 6 6 7 7 7 6 6 6 6 7 6 6 6 6 6 6 7 7 6 6 7 7 7 6 6 6 6 8 . . . 
6 6 6 8 6 6 6 6 7 6 6 6 7 7 6 6 7 6 7 7 6 7 7 6 6 6 7 7 6 6 6 6 6 8 . . 
8 8 8 6 6 6 6 6 6 6 6 7 7 7 6 7 7 6 7 7 6 6 7 6 6 6 6 6 6 7 7 6 6 6 8 . 
. 8 6 6 6 8 8 6 6 6 6 6 7 6 6 7 7 6 7 7 6 6 6 6 6 6 7 7 6 6 6 6 6 6 6 8 
. 8 6 6 8 8 6 6 6 6 6 6 6 6 6 7 7 6 6 6 6 6 6 7 6 6 7 7 7 6 6 6 6 6 8 8 
. 6 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 7 6 6 6 6 6 6 6 8 8 . . 
. . 8 8 6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 7 7 6 6 7 7 7 6 6 6 6 6 6 8 . . . 
. . . 8 6 6 8 8 6 6 6 6 6 6 6 6 6 6 6 7 7 6 6 7 7 7 6 6 6 6 6 6 8 . . . 
. . . 8 6 8 8 6 6 6 8 6 6 6 6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 8 8 8 . . . . 
. . . . 8 8 8 6 6 8 8 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 . . . . . . 
. . . . . . 8 6 8 8 6 6 6 8 6 6 6 8 6 6 6 6 8 6 6 6 8 6 8 . . . . . . . 
. . . . . . 8 8 8 6 6 6 8 8 6 6 8 8 6 6 6 8 8 8 6 6 8 8 8 . . . . . . . 
. . . . . . . . 8 8 8 8 8 8 8 6 8 8 8 8 8 c e 8 6 8 . . . . . . . . . . 
. . . . . . . . . . . . . . e 8 8 e 8 8 . e c . 8 . . . . . . . . . . . 
. . . . . . . . . . . . . . . e e e e . . e . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . c e e f . c e . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . c e e f c e c . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f e e f c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f c e e e c . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f c e e c . . . . . . . . . . . . . . . 
`, SpriteKind.Placed)
sprites.setDataString(tree, "name", "Tree")
tree.setFlag(SpriteFlag.Invisible, true)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100003030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`,
            img`
2 2 2 2 2 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass1,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass2],
            TileScale.Sixteen
        ))
scene.cameraFollowSprite(point)
