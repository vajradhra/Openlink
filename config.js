// OpenAPI 連接器配置文件
const CONFIG = {
    // 預設API設置
    defaultEndpoint: 'https://jsonplaceholder.typicode.com/posts/1',
    defaultMethod: 'GET',
    defaultHeaders: {
        'Content-Type': 'application/json'
    },
    
    // 歷史記錄設置
    maxHistoryItems: 20,
    
    // UI設置
    theme: {
        primaryColor: '#3B82F6', // 藍色
        successColor: '#10B981', // 綠色
        errorColor: '#EF4444',   // 紅色
        warningColor: '#F59E0B'  // 黃色
    },
    
    // 請求超時設置（毫秒）
    requestTimeout: 30000,
    
    // 支持的HTTP方法
    supportedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    
    // 常用API端點模板
    apiTemplates: [
        {
            name: 'JSONPlaceholder - 獲取文章',
            endpoint: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'GET',
            description: '獲取示例文章數據'
        },
        {
            name: 'JSONPlaceholder - 創建文章',
            endpoint: 'https://jsonplaceholder.typicode.com/posts',
            method: 'POST',
            description: '創建新文章',
            body: {
                title: '測試文章',
                body: '這是測試內容',
                userId: 1
            }
        },
        {
            name: 'JSONPlaceholder - 更新文章',
            endpoint: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'PUT',
            description: '更新文章內容',
            body: {
                id: 1,
                title: '更新的標題',
                body: '更新的內容',
                userId: 1
            }
        },
        {
            name: 'JSONPlaceholder - 刪除文章',
            endpoint: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'DELETE',
            description: '刪除指定文章'
        }
    ],
    
    // 常用請求頭模板
    headerTemplates: [
        {
            name: 'JSON API',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        },
        {
            name: 'XML API',
            headers: {
                'Content-Type': 'application/xml',
                'Accept': 'application/xml'
            }
        },
        {
            name: 'Form Data',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        },
        {
            name: 'Bearer Token',
            headers: {
                'Authorization': 'Bearer YOUR_TOKEN_HERE',
                'Content-Type': 'application/json'
            }
        }
    ],
    
    // 錯誤消息
    errorMessages: {
        noEndpoint: '請輸入API端點',
        invalidJson: 'JSON格式錯誤',
        networkError: '網路連接錯誤',
        timeout: '請求超時',
        corsError: '跨域請求被阻止',
        serverError: '伺服器錯誤'
    },
    
    // 成功消息
    successMessages: {
        requestSent: '請求發送成功',
        dataReceived: '數據接收成功',
        historyCleared: '歷史記錄已清除'
    }
};

// 導出配置（如果在Node.js環境中）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} 