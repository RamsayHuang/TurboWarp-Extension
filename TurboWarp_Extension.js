// 定義擴充功能
(function(Scratch) {
    'use strict';

    // 定義積木邏輯
    const extension = {
        name: 'Custom API Extension',
        
        blocks: [
            {
                opcode: 'addNumbers',
                blockType: Scratch.BlockType.REPORTER,
                text: 'Add [X] and [Y]',
                arguments: {
                    X: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 1
                    },
                    Y: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 2
                    }
                },
                async func(args) {
                    const x = args.X;
                    const y = args.Y;

                    // 使用 Fetch API 呼叫本地端的 HTTP 伺服器
                    const response = await fetch(`http://localhost:5000/add?x=${x}&y=${y}`);
                    const result = await response.json();
                    
                    return result.result; // 返回加法結果
                }
            }
        ]
    };

    // 註冊擴充功能
    Scratch.extensions.register(extension);
})(window.Scratch);