game.module(
    'game.main'
)
.require(
    'game.assets',
    'game.objects'
)
.body(function() {

game.createScene('Main', {
    backgroundColor: 0x44cce2,
    init: function () {
        this.world = new game.World(0, 1);
        game.scene.addObject(new game.Rect(128, 0));
        game.scene.addObject(new game.Rect1(260, 0));
    }
});

});
