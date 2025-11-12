namespace SpriteKind {
    export const Npc = SpriteKind.create()
    export const Result = SpriteKind.create()
    export const Key = SpriteKind.create()
    export const Cogwheel = SpriteKind.create()
    export const Shark = SpriteKind.create()
    export const Platform = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const Lever = SpriteKind.create()
}
function level_one () {
    tiles.setCurrentTilemap(tilemap`level1`)
    scene.setBackgroundColor(14)
    music.stopAllSounds()
    music.play(music.createSong(hex`0078000408020603001c0001dc00690000045e010004000000000000000000000564000104000306001c002000012a04001c00100500640000041e000004000000000000000000000000000a0400040c0018001c00011d20002400011d05001c000f0a006400f4010a0000040000000000000000000000000000000002240000000400012a04000800012708000c0001240c001000012a10001400012714001800012406001c00010a006400f401640000040000000000000000000000000000000002180028002c0001272c003000012730003400012434003800012408001c000e050046006603320000040a002d0000006400140001320002010002120024002800012038003c0001203c004000012009010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800180004000500010a08000900010810001100010a140015000108`), music.PlaybackMode.LoopingInBackground)
    game.showLongText("Level 1 - Gangeværket", DialogLayout.Center)
    game.showLongText("Løs gangestykket på computeren og find discen med det rigtige svar for at åbne døren", DialogLayout.Center)
    game.showLongText("Men regn godt efter, da en forkert disc koster et liv!", DialogLayout.Center)
    mySprite = sprites.create(img`
        . . . f f f f f f f f . . . . . 
        . . f 2 2 2 2 2 2 2 2 f . . . . 
        . f 2 2 2 2 2 2 2 2 2 2 f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f f f f 
        . f 4 4 4 4 4 4 f 1 f 4 f . . . 
        . f 4 4 4 4 4 4 f 8 f 4 f . . . 
        . f 4 4 4 4 4 4 f f 4 4 f . . . 
        . . f 4 4 4 4 4 4 4 4 f . . . . 
        . . . f 4 4 4 4 2 2 f . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f 4 4 f . . . . . . . 
        . 4 4 f f 2 2 2 2 f f 4 4 . . . 
        . . . f 2 2 5 5 2 2 f . . . . . 
        . f f f f f f f f f f f f . . . 
        . f c c c f . . f c c c f . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 50, 0)
    mySprite.setStayInScreen(true)
    mySprite.ay = 100
    mySprite.z = 100
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 10))
    mySprite.sayText("For Matematikken!", 2000, false)
    key1 = sprites.create(img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f 5 5 5 . . . . 
        . . . . 5 5 5 5 f 5 5 5 5 . . . 
        . . . . 5 5 5 5 f 5 5 5 5 . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        `, SpriteKind.Key)
    tiles.placeOnTile(key1, tiles.getTileLocation(5, 12))
    animation.runImageAnimation(
    key1,
    [img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f 5 5 5 . . . . 
        . . . . 5 5 5 5 f 5 5 5 5 . . . 
        . . . . 5 5 5 5 f 5 5 5 5 . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f 5 5 5 . . . . 
        . . . . . 5 5 5 f 5 5 5 . . . . 
        . . . . . 5 5 5 f 5 5 5 . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 f f 5 5 . . . . . 
        . . . . . . 5 5 f 5 5 . . . . . 
        . . . . . . 5 5 f 5 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 f f 5 5 . . . . . 
        . . . . . . 5 5 f 5 5 . . . . . 
        . . . . . . 5 5 f 5 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f 5 5 5 . . . . 
        . . . . . 5 5 5 f 5 5 5 . . . . 
        . . . . . 5 5 5 f 5 5 5 . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f 5 5 5 . . . . 
        . . . . 5 5 5 5 f 5 5 5 5 . . . 
        . . . . 5 5 5 5 f 5 5 5 5 . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 5 5 . . 
        . . . . . . . 5 5 5 5 5 5 5 . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f 5 5 5 . . . . 
        . . . . . 5 5 5 f 5 5 5 . . . . 
        . . . . . 5 5 5 f 5 5 5 . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 f f 5 5 . . . . . 
        . . . . . . 5 5 f 5 5 . . . . . 
        . . . . . . 5 5 f 5 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 f f 5 5 . . . . . 
        . . . . . . 5 5 f 5 5 . . . . . 
        . . . . . . 5 5 f 5 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f 5 5 5 . . . . 
        . . . . . 5 5 5 f 5 5 5 . . . . 
        . . . . . 5 5 5 f 5 5 5 . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        `],
    100,
    true
    )
    for (let index = 0; index <= 12; index++) {
        tiles.setWallAt(tiles.getTileLocation(30, index), true)
    }
    for (let index2 = 0; index2 <= 12; index2++) {
        tiles.setWallAt(tiles.getTileLocation(50, index2), true)
    }
    for (let index3 = 0; index3 <= 12; index3++) {
        tiles.setWallAt(tiles.getTileLocation(70, index3), true)
    }
    Results1 = sprites.allOfKind(SpriteKind.Result)
    Allresult1 = []
    AllResults = []
    result1tiles = tiles.getTilesByType(assets.tile`myTile72`)
    equationtiles1 = tiles.getTilesByType(assets.tile`myTile17`)
    correctanswernum = 0
    for (let index1 = 0; index1 <= 2; index1++) {
        factor1 = randint(5, 30)
        factor2 = randint(2, 9)
        correctAnswer1 = factor1 * factor2
        Allresult1.unshift(correctAnswer1)
        textSprite6 = textsprite.create("" + convertToText(factor1) + "*" + convertToText(factor2))
        tiles.placeOnTile(textSprite6, equationtiles1[index1])
    }
    for (let index1 = 0; index1 <= 11; index1++) {
        result1 = sprites.create(img`
            . . f f f f f f f f f f f f . . 
            . f f 5 f f f f f f f f 5 f f . 
            f f 5 f f f f f f f f f 5 f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f 5 f f f f f f f f 5 5 f f 
            f f f 5 f f f f f f f f 5 f f f 
            . f 5 5 f f f f f f f f 5 f f . 
            . . f f f f f f f f f f f f . . 
            `, SpriteKind.Result)
        tiles.placeOnTile(result1, result1tiles[index1])
        Results1.unshift(result1)
        if (index1 == 0 || (index1 == 6 || index1 == 8)) {
            correctanswernum = Allresult1.pop()
            textSprite7 = textsprite.create(convertToText(correctanswernum))
            tiles.placeOnTile(textSprite7, result1tiles[index1])
            AllResults.unshift(textSprite7)
            textSprite7.follow(result1)
        } else {
            wrongasnwernum = correctanswernum + randint(-20, 20)
            textSprite8 = textsprite.create(convertToText(wrongasnwernum))
            tiles.placeOnTile(textSprite8, result1tiles[index1])
            AllResults.unshift(textSprite8)
            textSprite8.follow(result1)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile72`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
// Pickup logic: Press B while overlapping a Result sprite
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (level == 1) {
        if (isHolding == false && canPick == true) {
            // Check all sprites of kind Result
            for (let sprite of sprites.allOfKind(SpriteKind.Result)) {
                if (mySprite.overlapsWith(sprite)) {
                    heldItem = sprite
                    isHolding = true
                    canPick = false
                }
            }
        } else if (isHolding == true && canPick == false && mySprite.vy == 0 && mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile35`) == false) {
            // Drop logic: Press B again when holding
            heldItem.setPosition(mySprite.x - 10, mySprite.y)
            // Drop at player's feet
            isHolding = false
            pause(200)
            canPick = true
        }
    } else if (level == 2 || level == 4) {
        if (mySprite.vx >= 0 && canShoot == 0) {
            canShoot = 1
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 1 . . . . . . . . 1 1 . . . . 
                . 1 1 . . . . . . 1 1 1 1 . . . 
                . 1 1 f f f f f f f 1 1 1 1 . . 
                . 1 1 . . . . . . 1 1 1 1 . . . 
                . 1 . . . . . . . . 1 1 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 80, 0)
            projectile.setFlag(SpriteFlag.GhostThroughTiles, true)
            projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
            pause(500)
            canShoot = 0
        } else if (mySprite.vx < 0 && canShoot == 0) {
            canShoot = 1
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 1 1 . . . . . . . . 1 . 
                . . . 1 1 1 1 . . . . . . 1 1 . 
                . . 1 1 1 1 f f f f f f f 1 1 . 
                . . . 1 1 1 1 . . . . . . 1 1 . 
                . . . . 1 1 . . . . . . . . 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -80, 0)
            projectile.setFlag(SpriteFlag.GhostThroughTiles, true)
            projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
            pause(500)
            canShoot = 0
        }
    }
})
function createLevel () {
    if (level == 1) {
        level_one()
    } else if (level == 2) {
        level_two()
    } else if (level == 3) {
        level_three()
    } else if (level == 4) {
        level_four()
    }
    if (level == 3) {
        info.startCountdown(151)
    } else {
        info.startCountdown(301)
    }
    info.setLife(3)
    for (let value62 of tiles.getTilesByType(assets.tile`myTile63`)) {
        apple = sprites.create(img`
            . . . . . e 7 . . . . . . . . . 
            . . . . . . 7 . . 7 f . . . . . 
            . . . . . . 7 . 7 7 . . . . . . 
            . . . 2 2 2 7 7 7 2 2 2 . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . 2 2 2 2 2 2 2 2 2 1 2 2 2 . . 
            . 2 2 2 2 2 2 2 2 2 1 2 2 2 . . 
            . 2 2 2 2 2 2 2 2 2 2 1 2 2 . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 f f f 2 . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(apple, value62)
        tiles.setTileAt(value62, assets.tile`transparency16`)
    }
}
function level_two () {
    scene.setBackgroundColor(8)
    tiles.setCurrentTilemap(tilemap`level2`)
    mySprite.vy = 15
    mySprite.ay = 25
    mySprite.setImage(img`
        . . . f f f f f f f f . . . . . 
        . . f d d d d d d d d f . . . . 
        . f d d d d d d d d d d f . . . 
        f d d d d d d d d d d d d f . . 
        f f d d d d d d f f f d d f . . 
        . f d d d d d d f 1 f f f . . . 
        . f d d d d d d f 8 f d f . . . 
        . f d d d d d d f f d d f . . . 
        . . f d d d d d d d f f . . . . 
        . . . f d d d d d f d d d . . . 
        . . . f f f f f f f f . d . . . 
        . . . . d f 4 4 f d d d d . . . 
        . 4 4 f f f f f f f f 4 4 . . . 
        . . . f f f 5 5 f f f . . . . . 
        . f f f f f f f f f f f f . . . 
        . f c c c f . . f c c c f . . . 
        `)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 13))
    game.showLongText("Level 2 - Divisionssøen", DialogLayout.Center)
    game.showLongText("Løs divisions stykket og følg skiltet med det rigtige svar for at nå til nøglen.", DialogLayout.Center)
    game.showLongText(" Du kan skyde hajerne med din harpun, men skynd dig!", DialogLayout.Center)
    mySprite.sayText("Vent Hajerne??", 2000, false)
    key2 = sprites.create(img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . 5 5 5 5 5 f 5 5 5 . . . 
        . . . . 5 5 5 f f f 5 5 5 . . . 
        . . . . . 5 5 f 5 5 5 5 . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        `, SpriteKind.Key)
    tiles.placeOnTile(key2, tiles.getTileLocation(5, 13))
    animation.runImageAnimation(
    key2,
    [img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . 5 5 5 5 5 f 5 5 5 . . . 
        . . . . 5 5 5 f f f 5 5 5 . . . 
        . . . . . 5 5 f 5 5 5 5 . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . 5 5 f 5 5 5 5 . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 f 5 5 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 f 5 5 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . 5 5 f 5 5 5 5 . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . 5 5 5 5 5 f 5 5 5 . . . 
        . . . . 5 5 5 f f f 5 5 5 . . . 
        . . . . . 5 5 f 5 5 5 5 . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 5 5 . . 
        . . . . . . . 5 5 5 5 5 5 5 . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . 5 5 f 5 5 5 5 . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 f 5 5 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 f 5 5 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . 5 5 f 5 5 5 5 . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        `],
    100,
    true
    )
    music.play(music.createSong(hex`0078000408020401001c000f05001202c102c201000405002800000064002800031400060200042a0020002400012c24002800012a28002c0001292c003000012730003400012934003800012a38003c00012c07001c00020a006400f401640000040000000000000000000000000000000003180000000400012a08000c00012a10001400012a18001c00012a08001c000e050046006603320000040a002d000000640014000132000201000218000400080001270c00100001271400180001271c002000012709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003000000001000104080009000104100011000104180019000104200021000104280029000104300031000104380039000104`), music.PlaybackMode.LoopingInBackground)
    equationslvl2 = tiles.getTilesByType(assets.tile`myTile79`)
    answerslvl2 = tiles.getTilesByType(assets.tile`myTile72`)
    wrongslvl2 = tiles.getTilesByType(assets.tile`myTile73`)
    answers2 = []
    for (let index = 0; index <= 2; index++) {
        divisor = randint(2, 15)
        Multiplikant = randint(5, 15)
        dividend = divisor * Multiplikant
        resultlvl2 = dividend / divisor
        textSprite2 = textsprite.create("" + dividend + "÷" + divisor)
        tiles.placeOnTile(textSprite2, equationslvl2[index])
        tiles.setTileAt(equationslvl2[index], assets.tile`transparency16`)
        answers2.push(resultlvl2)
    }
    for (let index = 0; index <= 2; index++) {
        correctlvl2 = answers2[index]
        textSprite3 = textsprite.create(convertToText(correctlvl2))
        tiles.placeOnTile(textSprite3, answerslvl2[index])
        tiles.setTileAt(answerslvl2[index], assets.tile`myTile54`)
    }
    for (let index = 0; index <= 5; index++) {
        correctlvl2 = answers2[index]
        wronglvl21 = correctlvl2 + randint(1, 3)
        wronglvl22 = correctlvl2 - randint(1, 3)
        textsprite4 = textsprite.create(convertToText(wronglvl21))
        textsprite5 = textsprite.create(convertToText(wronglvl22))
        tiles.placeOnTile(textsprite4, wrongslvl2[index + index])
        tiles.placeOnTile(textsprite5, wrongslvl2[index + index + 1])
        tiles.setTileAt(wrongslvl2[index], assets.tile`myTile54`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Shark, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
    pause(2000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (level == 1 && mySprite.vy == 0) {
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
        mySprite.setVelocity(0, -100)
    } else if (level == 2) {
        mySprite.vy = -40
    } else if (level == 3 || level == 4) {
        if (jumpcounter < 2) {
            music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
            mySprite.setVelocity(0, -65)
            jumpcounter += 1
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Platform, function (sprite, otherSprite) {
    if (isInArray(wrongPlat, otherSprite) == true) {
        tiles.setWallAt(otherSprite.tilemapLocation(), false)
        sprites.destroy(otherSprite)
    }
})
function destroyPair (num: number) {
    if (num >= 0 && (num < Results1.length && num < AllResults.length)) {
        sprites.destroy(AllResults[num])
        sprites.destroy(Results1[num])
    }
}
function GCD (num: number, num2: number) {
    while (num2 != 0) {
        temp = num2
        num2 = num % num2
        num = temp
    }
    return num
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Lever, function (sprite, otherSprite) {
    if ((otherSprite == levers[1] || (otherSprite == levers[5] || otherSprite == levers[6])) && otherSprite.image != img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . f f 1 f f . . . . . . 
        . . . . f f 7 7 7 f f . . . . . 
        . . . . f 7 7 7 7 7 f . . . . . 
        . . . . f 7 7 7 7 7 f . . . . . 
        . . . . f f 7 7 7 f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `) {
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . f f 1 f f . . . . . . 
            . . . . f f 7 7 7 f f . . . . . 
            . . . . f 7 7 7 7 7 f . . . . . 
            . . . . f 7 7 7 7 7 f . . . . . 
            . . . . f f 7 7 7 f f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        state += 1
        sprites.destroy(sprite)
        changeState()
    } else if (otherSprite.image != img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . f f 1 f f . . . . . . 
        . . . . f f 2 2 2 f f . . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        . . . . f f 2 2 2 f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `) {
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . f f 1 f f . . . . . . 
            . . . . f f 2 2 2 f f . . . . . 
            . . . . f 2 2 2 2 2 f . . . . . 
            . . . . f 2 2 2 2 2 f . . . . . 
            . . . . f f 2 2 2 f f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        sprites.destroy(sprite)
        Null.x += 4
    }
})
info.onCountdownEnd(function () {
    game.gameOver(false)
    game.setGameOverMessage(false, "! Game Over !")
    music.stopAllSounds()
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.LoopingInBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Key, function (sprite, otherSprite) {
    if (level == 4 && state == 0) {
        tiles.placeOnTile(otherSprite, tiles.getTileLocation(99, 12))
        Null = sprites.create(img`
            .....aaaaaaa........aaaaaaa.....
            ...aaaaaaaaaaa....aaaaaaaaaaa...
            ..aaaaaaaaaaaaa..aaaaaaaaaaaaa..
            ..aaaaaaaaaaaaa..aaaaaaaaaaaaa..
            .aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
            ..aaaaaaaaaaaaaaaaaaaaaaaaaaaa..
            ..aaaaaaaaaaaaaaaaaaaaaaaaaaaa..
            ...aaaaaaaaaaaaaaaaaaaaaaaaaa...
            .....aaaaaaaaaaaaaaaaaaaaaa.....
            .......1111111111111111.........
            ......1111111111111111111.......
            .....11111111111111111111111111.
            ....111111fff1111fff111111111111
            ....11111111f111111f111111111111
            .1111111111111111111111111111111
            .111111111111f2f2f11111111111111
            .111111111111fffff11111111111111
            .111111111111f2f2f1111111111111.
            111111111111111111111111111111..
            11111111111111111111111111111...
            11111111111111111111111..111....
            111111111..11111.11111..........
            .111111...111111.111111.........
            ..........111111.1111111........
            .........1111111..111111........
            ...................111..........
            `, SpriteKind.Boss)
        tiles.placeOnTile(Null, tiles.getTileLocation(1, 4))
        game.setDialogFrame(img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `)
        game.showLongText("Kun ved at løse alle Nulls ligninger, kan du redde Matematikbyen", DialogLayout.Right)
        game.showLongText("Skyd håndtagene med det rigtige svar, inden Null fanger dig!", DialogLayout.Right)
        Null.vx = 44
        Null.setFlag(SpriteFlag.GhostThroughWalls, true)
        Null.setFlag(SpriteFlag.GhostThroughTiles, true)
        state = 1
        changeState()
        while (Null.vx >= 40) {
            Null.vy = 20
            pause(200)
            Null.vy = -20
            pause(200)
        }
    } else if (level == 4 && state == 4) {
        music.stopAllSounds()
        game.setGameOverPlayable(true, music.melodyPlayable(music.magicWand), true)
        game.setGameOverMessage(true, "Matematikbyen er reddet!")
        game.setGameOverEffect(true, effects.confetti)
        game.gameOver(true)
    } else {
        sprites.destroy(otherSprite)
        game.showLongText("! Level Clear !      Et skridt tættere på at redde Matematikbyen!", DialogLayout.Center)
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        level += 1
        clearLevel()
    }
})
function level_three () {
    music.play(music.createSong(hex`005a000408020405001c000f0a006400f4010a0000040000000000000000000000000000000002180038003a00011b3a003c00011b3c003e00011d3e004000011d07001c00020a006400f401640000040000000000000000000000000000000003900000000200012402000400012404000600012206000800012208000a0001200a000c0001200c000e0001250e001000012510001200012412001400012414001600012216001800012220002200012422002400012424002600012226002800012228002a0001202a002c0001202c002e0001252e003000012530003200012432003400012434003600012236003800012208001c000e050046006603320000040a002d0000006400140001320002010002180018001a00011b1a001c00011b1c001e00011d1e002000011d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80024000c000d00010a1800190001071a001b0001072c002d00010a3800390001073a003b000107`), music.PlaybackMode.LoopingInBackground)
    game.showLongText("Level 3 - Brøkhallen", DialogLayout.Center)
    game.showLongText("Undgå lavaen ved at hoppe på platformene. Men pas på! Kun platforme med brøker, som kan Forkortes, er solide! ", DialogLayout.Center)
    game.showLongText("Varmen er dog farlig så skynd dig! Brug din kappe ved at trykke hop 2 gange!", DialogLayout.Center)
    scene.setBackgroundColor(15)
    tiles.setCurrentTilemap(tilemap`level3`)
    mySprite.sayText("Gotta go fast!", 1000, false)
    mySprite.setImage(img`
        . . . f f f f f f f f . . . . . 
        . . f 2 2 2 2 2 2 2 2 f . . . . 
        . f 2 2 2 2 2 2 2 2 2 2 f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f f f f 
        . f 4 4 4 4 4 4 f 1 f 4 f . . . 
        . f 4 4 4 4 4 4 f 8 f 4 f . . . 
        . f 4 4 4 4 4 4 f f 4 4 f . . . 
        . . f 4 4 4 4 4 4 4 4 f . . . . 
        f f f f 4 4 4 4 2 2 f . . . . . 
        f 2 2 f f f f f f f f . . . . . 
        f 2 2 2 2 f 4 4 f . . . . . . . 
        . 4 4 f f 2 2 2 2 f f 4 4 . . . 
        . . . f 2 2 5 5 2 2 f . . . . . 
        . f f f f f f f f f f f f . . . 
        . f c c c f . . f c c c f . . . 
        `)
    mySprite.ay = 100
    mySprite.vy = 15
    key3 = sprites.create(img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . 5 5 5 5 5 f 5 5 5 . . . 
        . . . . 5 5 5 f f f 5 5 5 . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        `, SpriteKind.Key)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 12))
    tiles.placeOnTile(key3, tiles.getTileLocation(72, 12))
    animation.runImageAnimation(
    key3,
    [img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . 5 5 5 5 5 f 5 5 5 . . . 
        . . . . 5 5 5 f f f 5 5 5 . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . 5 5 5 5 5 f 5 5 5 . . . 
        . . . . 5 5 5 f f f 5 5 5 . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 5 5 . . 
        . . . . . . . 5 5 5 5 5 5 5 . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        `],
    100,
    true
    )
    rightPlat = []
    wrongPlat = []
    for (let value4 of tiles.getTilesByType(assets.tile`myTile77`)) {
        platformgood = sprites.create(img`
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
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
            `, SpriteKind.Platform)
        rightPlat.unshift(platformgood)
        tiles.placeOnTile(platformgood, value4)
        tiles.setWallAt(value4, true)
    }
    for (let value5 of tiles.getTilesByType(assets.tile`myTile78`)) {
        platformBad = sprites.create(img`
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
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
            `, SpriteKind.Platform)
        wrongPlat.unshift(platformBad)
        tiles.placeOnTile(platformBad, value5)
    }
    for (let value32 of tiles.getTilesByType(assets.tile`myTile77`)) {
        tiles.setTileAt(value32, assets.tile`myTile74`)
    }
    for (let value33 of tiles.getTilesByType(assets.tile`myTile78`)) {
        tiles.setTileAt(value33, assets.tile`myTile74`)
    }
    godebrøker = tiles.getTilesByType(assets.tile`myTile72`)
    dårligebrøker = tiles.getTilesByType(assets.tile`myTile73`)
    for (let index = 0; index <= 11; index++) {
        tæller = randint(2, 99)
        nævner = randint(2, 99)
        while (GCD(tæller, nævner) == 1 || tæller > nævner || tæller == nævner) {
            tæller = randint(2, 99)
            nævner = randint(2, 99)
        }
        textSprite = textsprite.create("" + tæller + "/" + nævner)
        tiles.placeOnTile(textSprite, godebrøker[index])
        tiles.setTileAt(godebrøker[index], assets.tile`transparency16`)
    }
    for (let index = 0; index <= 8; index++) {
        tæller = randint(2, 99)
        nævner = randint(2, 99)
        while (GCD(tæller, nævner) > 1 || tæller > nævner || tæller == nævner) {
            tæller = randint(2, 99)
            nævner = randint(2, 99)
        }
        textSprite = textsprite.create("" + tæller + "/" + nævner)
        tiles.placeOnTile(textSprite, dårligebrøker[index])
        tiles.setTileAt(dårligebrøker[index], assets.tile`transparency16`)
    }
}
function level_four () {
    scene.setBackgroundColor(15)
    tiles.setCurrentTilemap(tilemap`level4`)
    game.showLongText("Level 4 - Nulls Ligningsslot", DialogLayout.Center)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 5))
    mySprite.sayText("Nøglen? Det var nemt!", 2000, false)
    key4 = sprites.create(img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f 5 f 5 5 . . . . 
        . . . . 5 5 5 f 5 f 5 5 5 . . . 
        . . . . 5 5 5 f f f 5 5 5 . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        `, SpriteKind.Key)
    tiles.placeOnTile(key4, tiles.getTileLocation(5, 5))
    animation.runImageAnimation(
    key4,
    [img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f 5 f 5 5 . . . . 
        . . . . 5 5 5 f 5 f 5 5 5 . . . 
        . . . . 5 5 5 f f f 5 5 5 . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f 5 f 5 5 . . . . 
        . . . . . 5 5 f 5 f 5 5 . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 f 5 f 5 . . . . . 
        . . . . . . 5 f 5 f 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 f 5 f 5 . . . . . 
        . . . . . . 5 f 5 f 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f 5 f 5 5 . . . . 
        . . . . . 5 5 f 5 f 5 5 . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f 5 f 5 5 . . . . 
        . . . . 5 5 5 f 5 f 5 5 5 . . . 
        . . . . 5 5 5 f f f 5 5 5 . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 5 5 . . 
        . . . . . . . 5 5 5 5 5 5 5 . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f 5 f 5 5 . . . . 
        . . . . . 5 5 f 5 f 5 5 . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 f 5 f 5 . . . . . 
        . . . . . . 5 f 5 f 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 f 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 f 5 f 5 . . . . . 
        . . . . . . 5 f 5 f 5 . . . . . 
        . . . . . . 5 f f f 5 . . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 f 5 f 5 5 . . . . 
        . . . . . 5 5 f 5 f 5 5 . . . . 
        . . . . . 5 5 f f f 5 5 . . . . 
        . . . . . 5 5 5 5 f 5 5 . . . . 
        . . . . . . 5 5 5 f 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        `],
    100,
    true
    )
    levers = sprites.allOfKind(SpriteKind.Lever)
    for (let value6 of tiles.getTilesByType(assets.tile`myTile75`)) {
        lever = sprites.create(img`
            f . . . . . . . . . . . . . . . 
            f . . . . f f f f f . . . . . . 
            f . . . f f c c c f f . . . . . 
            f . . . f c c c c c f . . . . . 
            f . . . f c c c c c f . . . . . 
            f . . . f f c c c f f . . . . . 
            f . . . . f f 1 f f . . . . . . 
            f . . . . . . 1 . . . . . . . . 
            f . . . . . . 1 . . . . . . . . 
            f . . . . . . . . . . . . . . . 
            f . . . . . . . . . . . . . . . 
            f . . . . . . . . . . . . . . . 
            f . . . . . . . . . . . . . . . 
            f . . . . . . . . . . . . . . . 
            f . . . . . . . . . . . . . . . 
            f . . . . . . . . . . . . . . . 
            `, SpriteKind.Lever)
        levers.unshift(lever)
        tiles.placeOnTile(lever, value6)
    }
    for (let value7 of tiles.getTilesByType(assets.tile`myTile75`)) {
        tiles.setTileAt(value7, assets.tile`transparency16`)
    }
}
info.onLifeZero(function () {
    game.gameOver(false)
    game.setGameOverMessage(false, "! Game Over!")
    music.stopAllSounds()
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.LoopingInBackground)
})
function isInArray (array: any[], sprite: Sprite) {
    for (let index4 = 0; index4 <= array.length - 1; index4++) {
        if (array[index4] == sprite) {
            return true
        }
    }
    return false
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (info.life() <= 3) {
        info.changeLifeBy(1)
        sprites.destroy(otherSprite)
    }
})
function clearLevel () {
    for (let value42 of sprites.allOfKind(SpriteKind.Result)) {
        sprites.destroy(value42)
    }
    for (let value43 of sprites.allOfKind(SpriteKind.Shark)) {
        sprites.destroy(value43)
    }
    for (let value44 of sprites.allOfKind(SpriteKind.Projectile)) {
        sprites.destroy(value44)
    }
    for (let value45 of sprites.allOfKind(SpriteKind.Food)) {
        sprites.destroy(value45)
    }
    for (let value45 of sprites.allOfKind(SpriteKind.Text)) {
        sprites.destroy(value45)
    }
    info.changeScoreBy(info.score() + info.countdown())
    state = 0
    music.stopAllSounds()
    createLevel()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    if (controller.B.isPressed() && isHolding == true) {
        if (heldItem == Results1[11] || (heldItem == Results1[3] || heldItem == Results1[5])) {
            indexof = Results1.indexOf(heldItem)
            isHolding = false
            canPick = true
            state += 1
            destroyPair(indexof)
            changeState()
        } else {
            indexof = Results1.indexOf(heldItem)
            isHolding = false
            canPick = true
            destroyPair(indexof)
            info.changeLifeBy(-1)
        }
    }
})
function changeState () {
    if (level == 1) {
        if (state == 1) {
            tiles.setWallAt(tiles.getTileLocation(30, 12), false)
            tiles.setTileAt(tiles.getTileLocation(30, 12), assets.tile`myTile4`)
            tiles.setTileAt(tiles.getTileLocation(28, 12), assets.tile`myTile60`)
            tiles.setTileAt(tiles.getTileLocation(27, 12), assets.tile`myTile58`)
            tiles.setTileAt(tiles.getTileLocation(26, 12), assets.tile`myTile59`)
        } else if (state == 2) {
            tiles.setWallAt(tiles.getTileLocation(50, 12), false)
            tiles.setTileAt(tiles.getTileLocation(50, 12), assets.tile`myTile4`)
            tiles.setTileAt(tiles.getTileLocation(48, 12), assets.tile`myTile60`)
            tiles.setTileAt(tiles.getTileLocation(47, 12), assets.tile`myTile58`)
            tiles.setTileAt(tiles.getTileLocation(46, 12), assets.tile`myTile59`)
        } else if (state == 3) {
            tiles.setWallAt(tiles.getTileLocation(70, 12), false)
            for (let index5 = 0; index5 <= 2; index5++) {
                tiles.setTileAt(tiles.getTileLocation(70 + index5, 12), assets.tile`myTile4`)
            }
            tiles.setTileAt(tiles.getTileLocation(68, 12), assets.tile`myTile60`)
            tiles.setTileAt(tiles.getTileLocation(67, 12), assets.tile`myTile58`)
            tiles.setTileAt(tiles.getTileLocation(66, 12), assets.tile`myTile59`)
        }
    } else if (level == 4) {
        if (state == 1) {
            music.play(music.createSong(hex`0064000408020302001c000c960064006d019001000478002c010000640032000000000a0600050c0010001400011930003400011904001c00100500640000041e000004000000000000000000000000000a040004c00000000200011d02000400011d04000600012006000800012008000a0001240a000c0001240c000e0001250e001000012510001200012712001400012714001600012416001800012418001a0001201a001c0001201c001e00011e1e002000011e20002200011d22002400011d24002600012026002800012028002a0001242a002c0001242c002e0001252e003000012530003200012732003400012734003600012436003800012438003a0001203a003c0001203c003e00011e3e004000011e06001c00010a006400f4016400000400000000000000000000000000000000025a0004000600012c08000c0001290c000e00012c10001400012914001800012c18001c0001291c002000012c20002400012924002800012c28002c0001292c003000012c30003400012934003800012c38003c0001293c004000012c`), music.PlaybackMode.LoopingInBackground)
            Null.sayText("5x+6=81", 2000, false)
            mySprite.sayText("5x+6=81")
        } else if (state == 2) {
            for (let index6 = 0; index6 <= 3; index6++) {
                tiles.setWallAt(tiles.getTileLocation(45, index6 + 2), false)
                tiles.setTileAt(tiles.getTileLocation(45, index6 + 2), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(43, index6 + 2), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(42, index6 + 2), assets.tile`transparency16`)
            }
            Null.vx = 47
            music.stopAllSounds()
            music.play(music.createSong(hex`0073000408020302001c000c960064006d019001000478002c010000640032000000000a0600050c0010001400011930003400011904001c00100500640000041e000004000000000000000000000000000a040004c00000000200011d02000400011d04000600012006000800012008000a0001240a000c0001240c000e0001250e001000012510001200012712001400012714001600012416001800012418001a0001201a001c0001201c001e00011e1e002000011e20002200011d22002400011d24002600012026002800012028002a0001242a002c0001242c002e0001252e003000012530003200012732003400012734003600012436003800012438003a0001203a003c0001203c003e00011e3e004000011e06001c00010a006400f4016400000400000000000000000000000000000000025a0004000600012c08000c0001290c000e00012c10001400012914001800012c18001c0001291c002000012c20002400012924002800012c28002c0001292c003000012c30003400012934003800012c38003c0001293c004000012c`), music.PlaybackMode.LoopingInBackground)
            Null.sayText("4x+5x=36", 2000, false)
            mySprite.sayText("4x+5x=36")
        } else if (state == 3) {
            for (let index7 = 0; index7 <= 3; index7++) {
                tiles.setWallAt(tiles.getTileLocation(90, index7 + 2), false)
                tiles.setTileAt(tiles.getTileLocation(90, index7 + 2), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(88, index7 + 2), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(87, index7 + 2), assets.tile`transparency16`)
            }
            Null.vx = 50
            music.stopAllSounds()
            music.play(music.createSong(hex`0082000408020302001c000c960064006d019001000478002c010000640032000000000a0600050c0010001400011930003400011904001c00100500640000041e000004000000000000000000000000000a040004c00000000200011d02000400011d04000600012006000800012008000a0001240a000c0001240c000e0001250e001000012510001200012712001400012714001600012416001800012418001a0001201a001c0001201c001e00011e1e002000011e20002200011d22002400011d24002600012026002800012028002a0001242a002c0001242c002e0001252e003000012530003200012732003400012734003600012436003800012438003a0001203a003c0001203c003e00011e3e004000011e06001c00010a006400f4016400000400000000000000000000000000000000025a0004000600012c08000c0001290c000e00012c10001400012914001800012c18001c0001291c002000012c20002400012924002800012c28002c0001292c003000012c30003400012934003800012c38003c0001293c004000012c`), music.PlaybackMode.LoopingInBackground)
            Null.sayText("x^2-8=41", 2000, false)
            mySprite.sayText("x^2-8=41")
        } else if (state == 4) {
            for (let index8 = 0; index8 <= 3; index8++) {
                tiles.setWallAt(tiles.getTileLocation(139, index8 + 2), false)
                tiles.setTileAt(tiles.getTileLocation(139, index8 + 2), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(137, index8 + 2), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(136, index8 + 2), assets.tile`transparency16`)
            }
            tiles.placeOnTile(key4, tiles.getTileLocation(139, 5))
            tiles.placeOnTile(Null, tiles.getTileLocation(132, 5))
            mySprite.sayText("Wohoo", 500, false)
            Null.vx = 0
            Null.sayText("NOOOOOOOOOOOOOOOO")
            sprites.destroy(Null, effects.disintegrate, 5000)
            music.stopAllSounds()
            music.play(music.createSong(hex`0078000408010202001c000c960064006d019001000478002c010000640032000000000a0600051e0000000400011908000c00011d10001400011d18001c0001201c002000011909010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001e000000010001020800090001041000110001041800190001061c001d000102`), music.PlaybackMode.LoopingInBackground)
        }
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Shark, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.bubbles, 100)
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    music.stopAllSounds()
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
    game.setGameOverMessage(false, "GAME OVER!")
    game.gameOver(false)
})
let Currentanimation = 0
let shark: Sprite = null
let indexof = 0
let lever: Sprite = null
let key4: Sprite = null
let textSprite: TextSprite = null
let nævner = 0
let tæller = 0
let dårligebrøker: tiles.Location[] = []
let godebrøker: tiles.Location[] = []
let platformBad: Sprite = null
let platformgood: Sprite = null
let rightPlat: Sprite[] = []
let key3: Sprite = null
let Null: Sprite = null
let levers: Sprite[] = []
let num = 0
let num2 = 0
let temp = 0
let wrongPlat: Sprite[] = []
let jumpcounter = 0
let textsprite5: TextSprite = null
let textsprite4: TextSprite = null
let wronglvl22 = 0
let wronglvl21 = 0
let textSprite3: TextSprite = null
let correctlvl2 = 0
let textSprite2: TextSprite = null
let resultlvl2 = 0
let dividend = 0
let Multiplikant = 0
let divisor = 0
let answers2: number[] = []
let wrongslvl2: tiles.Location[] = []
let answerslvl2: tiles.Location[] = []
let equationslvl2: tiles.Location[] = []
let key2: Sprite = null
let apple: Sprite = null
let projectile: Sprite = null
let canShoot = 0
let heldItem: Sprite = null
let textSprite8: TextSprite = null
let wrongasnwernum = 0
let textSprite7: TextSprite = null
let result1: Sprite = null
let textSprite6: TextSprite = null
let correctAnswer1 = 0
let factor2 = 0
let factor1 = 0
let correctanswernum = 0
let equationtiles1: tiles.Location[] = []
let result1tiles: tiles.Location[] = []
let AllResults: TextSprite[] = []
let Allresult1: number[] = []
let Results1: Sprite[] = []
let key1: Sprite = null
let mySprite: Sprite = null
let state = 0
let isHolding = false
let canPick = false
let level = 0
scene.setBackgroundColor(8)
level = 1
canPick = true
isHolding = false
state = 0
music.setVolume(40)
info.setScore(0)
music.play(music.createSong(hex`0032000408010206001c00010a006400f401640000040000000000000000000000000000000002300000000400012704000800012708000c0001270c001000012a10001400012a14001800012a18001c00012c1c002000012c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800600000000100010202000300010b04000500010206000700010b0800090001020a000b00010b0c000d0001020e000f00010b10001100010212001300010b14001500010216001700010b1800190001021a001b00010b1c001d0001021e001f00010b`), music.PlaybackMode.LoopingInBackground)
tiles.setCurrentTilemap(tilemap`level5`)
game.setDialogFrame(img`
    f f f f f f f f f f f f f f f f 
    f f 2 f f f f f f f f f f 2 f f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f f 2 2 f f f f f f f f 2 2 f f 
    f f 2 f f f f f f f f f f 2 f f 
    f f 2 f f f f f f f f f f 2 f f 
    f f 2 f f f f f f f f f f 2 f f 
    f f 2 f f f f f f f f f f 2 f f 
    f f 2 f f f f f f f f f f 2 f f 
    f f 2 f f f f f f f f f f 2 f f 
    f f 2 f f f f f f f f f f 2 f f 
    f f 2 f f f f f f f f f f 2 f f 
    f f 2 2 f f f f f f f f 2 2 f f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f f 2 f f f f f f f f f f 2 f f 
    f f f f f f f f f f f f f f f f 
    `)
game.setDialogTextColor(1)
game.splash("Taltyven Null")
game.showLongText("Matematikbyen er i kaos! Taltyven Null har stjålet de fire Talnøgler og låst alle byens tal inde. .", DialogLayout.Center)
game.showLongText(" Du må rejse igennem Gangeværket, Divisionssøen, Brøkhallen og til sidst Nulls Ligningsslot!!", DialogLayout.Center)
game.showLongText("Men pas på. Du har kun 5 minutter til hvert Level. Du har kun 3 liv så for mange forkerte svar kan koste dig alt!.", DialogLayout.Center)
game.splash("Bliv Matematikhelten!")
tiles.setCurrentTilemap(tilemap`level6`)
game.setDialogFrame(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    `)
game.showLongText("-> Højre piletast : Bevæg dig mod højre  ", DialogLayout.Top)
game.showLongText("<- venstre piletast : Bevæg dig mod venstre", DialogLayout.Top)
game.showLongText("A / Space : Hop                    ", DialogLayout.Top)
game.showLongText("B / Enter : Saml objekter op eller Skyd med pile  ", DialogLayout.Top)
game.setDialogFrame(img`
    f f f f f f f f f f f f f f f f 
    f f 2 f f f f f f f f f f 2 f f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f f 2 2 f f f f f f f f 2 2 f f 
    f f 2 f f f f f f f f f f 2 f f 
    f f 2 f f f f f f f f f f 2 f f 
    f f 2 f f f f f f f f f f 2 f f 
    f f 2 f f f f f f f f f f 2 f f 
    f f 2 f f f f f f f f f f 2 f f 
    f f 2 f f f f f f f f f f 2 f f 
    f f 2 f f f f f f f f f f 2 f f 
    f f 2 f f f f f f f f f f 2 f f 
    f f 2 2 f f f f f f f f 2 2 f f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f f 2 f f f f f f f f f f 2 f f 
    f f f f f f f f f f f f f f f f 
    `)
createLevel()
game.onUpdateInterval(1000, function () {
    if (level == 2) {
        shark = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f f f f . . . . . . f 
            . . . f f f f f f f f f . . . f 
            . f f f f f f f f f f f f . f f 
            f f f 1 2 f f f f f f f f f f f 
            f f f 2 2 f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            . 2 2 f 1 1 1 1 1 1 f f f . f f 
            . . f 1 1 1 1 1 1 1 1 f . . f f 
            . . . f f f f f f f f . . . . f 
            . . . . f f . f f f . . . . . f 
            . . . . . f . . f f . . . . . . 
            . . . . . . . . . f . . . . . . 
            `, SpriteKind.Shark)
        shark.setPosition(scene.cameraProperty(CameraProperty.Right) + 260, randint(scene.cameraProperty(CameraProperty.Bottom), scene.cameraProperty(CameraProperty.Top)))
        shark.setVelocity(-50, 0)
        shark.setFlag(SpriteFlag.GhostThroughTiles, true)
        shark.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
})
forever(function () {
    if (level == 2) {
        if (controller.left.isPressed()) {
            if (Currentanimation != 1) {
                animation.runImageAnimation(
                mySprite,
                [img`
                    . . . . . f f f f f f f f . . . 
                    . . . . f d d d d d d d d f . . 
                    . . . f d d d d d d d d d d f . 
                    . . f d d d d d d d d d d d d f 
                    . . f d d f f f d d d d d d f f 
                    . . . f f f 1 f d d d d d d f . 
                    . . . f d f 8 f d d d d d d f . 
                    . . . f d d f f d d d d d d f . 
                    . . . . f f d d d d d d d f . . 
                    . . . d d d f d d d d d f . . . 
                    . . . d . f f f f f f f f . . . 
                    . . . d d d d f 4 4 f d . . . . 
                    . . . 4 4 f f f f f f f f 4 4 . 
                    . . . . . f f f 5 5 f f f . . . 
                    . . . f f f f f f f f f f f f . 
                    . . . f c c c f . . f c c c f . 
                    `,img`
                    . . . . . f f f f f f f f . . . 
                    . . . . f d d d d d d d d f . . 
                    . . . f d d d d d d d d d d f . 
                    . . f d d d d d d d d d d d d f 
                    . . f d d f f f d d d d d d f f 
                    . . . f f f 1 f d d d d d d f . 
                    . . . f d f 8 f d d d d d d f . 
                    . . . f d d f f d d d d d d f . 
                    . . . . f f d d d d d d d f . . 
                    . . . d d d f d d d d d f . . . 
                    . . . d . f f f f f f f f . . . 
                    . . . d d d d f 4 4 f d . . . . 
                    . . . . . f f f f f f f f . . . 
                    . . . 4 4 f f f 5 5 f f f 4 4 . 
                    . . . f f f f f f f f f f f f . 
                    . . . f c c c f . . f c c c f . 
                    `],
                200,
                true
                )
                Currentanimation = 1
            }
        } else if (controller.right.isPressed()) {
            if (Currentanimation != 2) {
                animation.runImageAnimation(
                mySprite,
                [img`
                    . . . f f f f f f f f . . . . . 
                    . . f d d d d d d d d f . . . . 
                    . f d d d d d d d d d d f f . . 
                    f d d d d d d d d d d d d f . . 
                    f f d d d d d d f f f d d f . . 
                    . f d d d d d d f 1 f f f . . . 
                    . f d d d d d d f 8 f d f . . . 
                    . f d d d d d d f f d d f . . . 
                    . . f d d d d d d d f f . . . . 
                    . . . f d d d d d f d d d . . . 
                    . . . f f f f f f f f . d . . . 
                    . . . . d f 4 4 f d d d d . . . 
                    . 4 4 f f f f f f f f 4 4 . . . 
                    . . . f f f 5 5 f f f . . . . . 
                    . f f f f f f f f f f f f . . . 
                    . f c c c f . . f c c c f . . . 
                    `,img`
                    . . . f f f f f f f f . . . . . 
                    . . f d d d d d d d d f . . . . 
                    . f d d d d d d d d d d f f . . 
                    f d d d d d d d d d d d d f . . 
                    f f d d d d d d f f f d d f . . 
                    . f d d d d d d f 1 f f f . . . 
                    . f d d d d d d f 8 f d f . . . 
                    . f d d d d d d f f d d f . . . 
                    . . f d d d d d d d f f . . . . 
                    . . . f d d d d d f d d d . . . 
                    . . . f f f f f f f f . d . . . 
                    . . . . d f 4 4 f d d d d . . . 
                    . . . f f f f f f f f . . . . . 
                    . 4 4 f f f 5 5 f f f 4 4 . . . 
                    . f f f f f f f f f f f f . . . 
                    . f c c c f . . f c c c f . . . 
                    `],
                200,
                true
                )
                Currentanimation = 2
            }
        } else {
            if (mySprite.vy == 0) {
                animation.stopAnimation(animation.AnimationTypes.All, mySprite)
                Currentanimation = 0
            }
        }
    } else if (level == 1) {
        if (controller.left.isPressed()) {
            if (Currentanimation != 1) {
                animation.runImageAnimation(
                mySprite,
                [img`
                    . . . . . f f f f f f f f . . . 
                    . . . . f 2 2 2 2 2 2 2 2 f . . 
                    f f f f 2 2 2 2 2 2 2 2 2 2 f . 
                    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                    f f f f f f f f f f f f f f f f 
                    . . . f 4 f 1 f 4 4 4 4 4 4 f . 
                    . . . f 4 f 8 f 4 4 4 4 4 4 f . 
                    . . . f 4 4 f f 4 4 4 4 4 4 f . 
                    . . . . f 4 4 4 4 4 4 4 4 f . . 
                    . . . . . f 2 2 4 4 4 4 f . . . 
                    . . . . . f f f f f f f f . . . 
                    . . . . . . . f 4 4 f . . . . . 
                    . . . 4 4 f f 2 2 2 2 f f 4 4 . 
                    . . . . . f 2 2 5 5 2 2 f . . . 
                    . . . f f f f f f f f f f f f . 
                    . . . f c c c f . . f c c c f . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f f f . . . 
                    . . . . f 2 2 2 2 2 2 2 2 f . . 
                    f f f f 2 2 2 2 2 2 2 2 2 2 f . 
                    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                    f f f f f f f f f f f f f f f f 
                    . . . f 4 f 1 f 4 4 4 4 4 4 f . 
                    . . . f 4 f 8 f 4 4 4 4 4 4 f . 
                    . . . f 4 4 f f 4 4 4 4 4 4 f . 
                    . . . . f 4 4 4 4 4 4 4 4 f . . 
                    . . . . . f 2 2 4 4 4 4 f . . . 
                    . . . . . . f f f f f f . . . . 
                    . . . . . f f 2 2 2 2 f f . . . 
                    . . . 4 4 f 2 2 5 5 2 2 f 4 4 . 
                    . . . f f f f f f f f f f f f . 
                    . . . f c c c f . . f c c c f . 
                    `],
                200,
                true
                )
                Currentanimation = 1
            }
        } else if (controller.right.isPressed()) {
            if (Currentanimation != 2) {
                animation.runImageAnimation(
                mySprite,
                [img`
                    . . . f f f f f f f f . . . . . 
                    . . f 2 2 2 2 2 2 2 2 f . . . . 
                    . f 2 2 2 2 2 2 2 2 2 2 f f f f 
                    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                    f f f f f f f f f f f f f f f f 
                    . f 4 4 4 4 4 4 f 1 f 4 f . . . 
                    . f 4 4 4 4 4 4 f 8 f 4 f . . . 
                    . f 4 4 4 4 4 4 f f 4 4 f . . . 
                    . . f 4 4 4 4 4 4 4 4 f . . . . 
                    . . . f 4 4 4 4 2 2 f . . . . . 
                    . . . f f f f f f f f . . . . . 
                    . . . . . f 4 4 f . . . . . . . 
                    . 4 4 f f 2 2 2 2 f f 4 4 . . . 
                    . . . f 2 2 5 5 2 2 f . . . . . 
                    . f f f f f f f f f f f f . . . 
                    . f c c c f . . f c c c f . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . f f f f f f f f . . . . . 
                    . . f 2 2 2 2 2 2 2 2 f . . . . 
                    . f 2 2 2 2 2 2 2 2 2 2 f f f f 
                    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                    f f f f f f f f f f f f f f f f 
                    . f 4 4 4 4 4 4 f 1 f 4 f . . . 
                    . f 4 4 4 4 4 4 f 8 f 4 f . . . 
                    . f 4 4 4 4 4 4 f f 4 4 f . . . 
                    . . f 4 4 4 4 4 4 4 4 f . . . . 
                    . . . f 4 4 4 4 2 2 f . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . f f 2 2 2 2 f f . . . . . 
                    . 4 4 f 2 2 5 5 2 2 f 4 4 . . . 
                    . f f f f f f f f f f f f . . . 
                    . f c c c f . . f c c c f . . . 
                    `],
                200,
                true
                )
                Currentanimation = 2
            }
        } else if (controller.A.isPressed() && mySprite.vx == 0) {
            if (Currentanimation != 3) {
                animation.runImageAnimation(
                mySprite,
                [img`
                    . . . f f f f f f f f . . . . . 
                    . . f 2 2 2 2 2 2 2 2 f . . . . 
                    . f 2 2 2 2 2 2 2 2 2 2 f f f f 
                    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                    f f f f f f f f f f f f f f f f 
                    . f 4 4 4 4 4 4 f 1 f 4 f . . . 
                    . f 4 4 4 4 4 4 f 8 f 4 f . . . 
                    . f 4 4 4 4 4 4 f f 4 4 f . . . 
                    . . f 4 4 4 4 4 4 4 4 f . . . . 
                    . . . f 4 4 4 4 2 2 f . . . . . 
                    . . . f f f f f f f f . . . . . 
                    . . . . . f 4 4 f . . . . . . . 
                    . 4 4 f f 2 2 2 2 f f 4 4 . . . 
                    . . . f 2 2 5 5 2 2 f . . . . . 
                    . f f f f f f f f f f f f . . . 
                    . f c c c f . . f c c c f . . . 
                    `,img`
                    . . . f f f f f f f f . . . . . 
                    . . f 2 2 2 2 2 2 2 2 f . . . . 
                    . f 2 2 2 2 2 2 2 2 2 2 f f f f 
                    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                    f f f f f f f f f f f f f f f f 
                    . f 4 4 4 4 4 4 f 1 f 4 f . . . 
                    . f 4 4 4 4 4 4 f 8 f 4 f . . . 
                    . f 4 4 4 4 4 4 f f 4 4 f . . . 
                    . . f 4 4 4 4 4 4 4 4 f . . . . 
                    . . . f 4 4 4 4 2 2 f . . . . . 
                    . . . f f f f f f f f . . . . . 
                    . . 4 . . f 4 4 f . . 4 . . . . 
                    . . 4 f f 2 2 2 2 f f 4 . . . . 
                    . . . f 2 2 5 5 2 2 f . . . . . 
                    . f f f f f f f f f f f f . . . 
                    . f c c c f . . f c c c f . . . 
                    `],
                200,
                false
                )
                Currentanimation = 3
            }
        } else {
            if (Currentanimation != 0) {
                animation.stopAnimation(animation.AnimationTypes.All, mySprite)
                Currentanimation = 0
            }
        }
    } else if (level == 3 || level == 4) {
        if (controller.left.isPressed()) {
            if (Currentanimation != 1) {
                animation.runImageAnimation(
                mySprite,
                [img`
                    . . . . . f f f f f f f f . . . 
                    . . . . f 2 2 2 2 2 2 2 2 f . . 
                    f f f f 2 2 2 2 2 2 2 2 2 2 f . 
                    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                    f f f f f f f f f f f f f f f f 
                    . . . f 4 f 1 f 4 4 4 4 4 4 f . 
                    . . . f 4 f 8 f 4 4 4 4 4 4 f . 
                    . . . f 4 4 f f 4 4 4 4 4 4 f . 
                    . . . . f 4 4 4 4 4 4 4 4 f . . 
                    . . . . . f 2 2 4 4 4 4 f 2 2 2 
                    . . . . . . f f f f f f 2 2 2 2 
                    . . . . . . . f 4 4 f 2 2 2 2 2 
                    . . . 4 4 f f 2 2 2 2 f f 4 4 . 
                    . . . . . f 2 2 5 5 2 2 f . . . 
                    . . . f f f f f f f f f f f f . 
                    . . . f c c c f . . f c c c f . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f f f . . . 
                    . . . . f 2 2 2 2 2 2 2 2 f . . 
                    f f f f 2 2 2 2 2 2 2 2 2 2 f . 
                    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                    f f f f f f f f f f f f f f f f 
                    . . . f 4 f 1 f 4 4 4 4 4 4 f . 
                    . . . f 4 f 8 f 4 4 4 4 4 4 f . 
                    . . . f 4 4 f f 4 4 4 4 4 4 f . 
                    . . . . f 4 4 4 4 4 4 4 4 f . . 
                    . . . . . f 2 2 4 4 4 4 f 2 2 2 
                    . . . . . . f f f f f f 2 2 2 2 
                    . . . 4 4 f f 2 2 2 2 f f 4 4 2 
                    . . . . . f 2 2 5 5 2 2 f . . . 
                    . . . f f f f f f f f f f f f . 
                    . . . f c c c f . . f c c c f . 
                    `],
                200,
                true
                )
                Currentanimation = 1
            }
        } else if (controller.right.isPressed()) {
            if (Currentanimation != 2) {
                animation.runImageAnimation(
                mySprite,
                [img`
                    . . . f f f f f f f f . . . . . 
                    . . f 2 2 2 2 2 2 2 2 f . . . . 
                    . f 2 2 2 2 2 2 2 2 2 2 f f f f 
                    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                    f f f f f f f f f f f f f f f f 
                    . f 4 4 4 4 4 4 f 1 f 4 f . . . 
                    . f 4 4 4 4 4 4 f 8 f 4 f . . . 
                    . f 4 4 4 4 4 4 f f 4 4 f . . . 
                    . . f 4 4 4 4 4 4 4 4 f . . . . 
                    2 2 2 f 4 4 4 4 2 2 f . . . . . 
                    2 2 2 2 f f f f f f . . . . . . 
                    2 2 2 2 2 f 4 4 f . . . . . . . 
                    . 4 4 f f 2 2 2 2 f f 4 4 . . . 
                    . . . f 2 2 5 5 2 2 f . . . . . 
                    . f f f f f f f f f f f f . . . 
                    . f c c c f . . f c c c f . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . f f f f f f f f . . . . . 
                    . . f 2 2 2 2 2 2 2 2 f . . . . 
                    . f 2 2 2 2 2 2 2 2 2 2 f f f f 
                    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                    f f f f f f f f f f f f f f f f 
                    . f 4 4 4 4 4 4 f 1 f 4 f . . . 
                    . f 4 4 4 4 4 4 f 8 f 4 f . . . 
                    . f 4 4 4 4 4 4 f f 4 4 f . . . 
                    . . f 4 4 4 4 4 4 4 4 f . . . . 
                    2 2 2 f 4 4 4 4 2 2 f . . . . . 
                    2 2 2 2 f f f f f f . . . . . . 
                    2 4 4 f f 2 2 2 2 f f 4 4 . . . 
                    . . . f 2 2 5 5 2 2 f . . . . . 
                    . f f f f f f f f f f f f . . . 
                    . f c c c f . . f c c c f . . . 
                    `],
                200,
                true
                )
                Currentanimation = 2
            }
        } else {
            if (Currentanimation != 0) {
                animation.stopAnimation(animation.AnimationTypes.All, mySprite)
                Currentanimation = 0
            }
        }
    }
})
forever(function () {
    if (mySprite.vy == 0) {
        jumpcounter = 0
    }
})
forever(function () {
    if (isHolding == true) {
        heldItem.setPosition(mySprite.x - 10, mySprite.y)
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile65`)) {
        mySprite.vy = -50
        info.changeLifeBy(-1)
    }
})
