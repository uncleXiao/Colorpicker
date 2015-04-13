'use strict';

describe('starter.controllers module', function() {

    beforeEach(module('starter.controllers'));

    describe('TEST tabCtrl', function(){
        it('tabCtrl is defined', inject(function($controller) {
            var tabCtrl = $controller('tabCtrl');
            expect(tabCtrl).toBeDefined();
        }));

    });
});