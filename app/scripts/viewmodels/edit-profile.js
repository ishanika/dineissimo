/*jslint browser: true */
/*global app, kendo */
"use strict";


(function (win) {
    win.app = win.app || {};

    win.app.EditProfile = kendo.observable({

        showEditProfile: function () {
            console.log("showing");
            $("#appDrawer").hide();
            $("#editProfileDrawer").show();
        },

        hideEditProfile: function () {
            console.log("hiding");
            $("#appDrawer").show();
            $("#editProfileDrawer").hide();
        }
    });
}(window));