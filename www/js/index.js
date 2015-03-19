/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


/**
 * This file only is a sample provided based off of the cordova sample for your use
 * @type {{initialize: Function, bindEvents: Function, onDeviceReady: Function, receivedEvent: Function}}
 */
 var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        alert("device ready");
        navigator.geolocation.getCurrentPosition(
          function(position) {
              alert(position.coords.latitude + ',' + position.coords.longitude);
              app.receivedEvent('deviceready');
          },
          function() {
              alert('Error getting location');
          });
        return false;
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {


        console.log('Received Event: ' + id);



        //Example to pragmatically set the iframe src
        //dexit.msdk.setPlayerUrl("player.dexit.co","/player");



        setTimeout(function() {

            //This assumes you have only one iframe on the page with the player.  If there are multiple you need to pass there reference in like below
            var wid = document.getElementById("playerFrame");
            dexit.msdk.xkbPluginManager = new dexit.msdk.XKbPluginManager([wid]);

            var options = {
                "name": "TestxKBPluginManagement",
                "namespace": "dexit.msdk",
                "extractDataFunction": "extract",
                "pluginUpdatesFunction": ""
            };

            dexit.msdk.xkbPluginManager.registerPlugin(options);

        }, 2000); //delay to make sure page is loading
    }
};

app.initialize();
