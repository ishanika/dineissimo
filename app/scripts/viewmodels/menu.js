/*jslint browser: true */
/*global app, kendo */
"use strict";

(function (win) {
    win.app = win.app || {};

    win.app.Menu = kendo.observable({

        dataSource: new kendo.data.DataSource({
            transport: {
                read: {
                    url: "data/menu.json",
                    dataType: "json"
                }
            }
        }),

        favorites: new kendo.data.DataSource({
            data: []
        }),

        photoListVisible: false,
        inListView: true,
        title: "Menu",

        addToFavorites: function (e) {
            console.log('begin');
            e.preventDefault();
            var fromDs = win.app.Menu.dataSource.get(e.data.id);
            fromDs.set('favorited', true);
            win.app.Menu.favorites.add(fromDs);
            console.log('end');
        },

        addToCart: function (e) {
            e.preventDefault();
            win.app.ShoppingCart.cart.add(e.data);
        },

        changeView : function (e) {
            var that = this;
            e.preventDefault();
            var icon = $('#view-changer .km-icon');
            if (icon.hasClass('km-th-large')) {
                icon.removeClass('km-th-large').addClass('km-list-bullet');
                that.set("photoListVisible", true);
            } else {
                icon.removeClass('km-list-bullet').addClass('km-th-large');
                that.set("photoListVisible", false);
            }
        }
    });
}(window));