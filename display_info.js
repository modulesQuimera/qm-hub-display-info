module.exports = function(RED) {
    // "use strict";

    function display_infoNode(config) {
        RED.nodes.createNode(this, config);
        this.msg_info = config.msg_info

        var node = this

        node.on('input', function(msg, send, done) {

            // substitua a variavel msg pela a informação desejada a ser passada via serial

            var obj = {
                payload: {
                    "type": "processing_modular_V1.0",
                    "slot": 1,
                    "compare": {},
                    "method": "display_info",
                    "info": node.msg_info
                }
            }
            send(obj)

        });

    }

    // nome do modulo
    RED.nodes.registerType("display_info", display_infoNode);
}