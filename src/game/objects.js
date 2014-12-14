game.module(
    'game.objects'
)
.body(function () {

    game.createClass('Rect', {
        init: function (x, y) {
            this.sprite = new game.Sprite('sprite.png', x, y);
            var width = this.sprite.width;
            var height = this.sprite.height;
            this.body = new game.Body({
                position: {x: x, y: y},
                collideAgainst: [0],
                collisionGroup: 1
            });
            this.body.velocity.x = 20;
           // this.body.velocity.y = 20;
            this.body.addShape(new game.Rectangle(width, height));
            this.body.collide = function () {
                game.scene.world.removeBody(this.body);
              //  this.body.velocity.y = 10;
                alert('You win');
                return true;
            }.bind(this);
            game.scene.stage.addChild(this.sprite);
            game.scene.world.addBody(this.body);
        },
        update: function () {
            this.sprite.position.x = this.body.position.x;
            this.sprite.position.y = this.body.position.y;
        }
    });

    game.createClass('Rect1', {
        init: function (x, y) {
            this.sprite = new game.Sprite('sprite_red.png', x, y);
            this.body = new game.Body({
                mass: 0,
                position: {x: x, y: y},
                collisionGroup: 0
            });
            this.body.addShape(new game.Rectangle(this.sprite.width, this.sprite.height));
            game.scene.stage.addChild(this.sprite);
            game.scene.world.addBody(this.body);
        }
    });

});
