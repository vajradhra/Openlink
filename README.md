# Openlink
雲書苑教育

# 🔗 OpenAPI 連接器

一個使用 jQuery 和 Tailwind CSS 構建的現代化 OpenAPI 測試工具，提供直觀的界面來測試和調試 API 請求。

## ✨ 功能特性

- 🎨 **現代化UI**: 使用 Tailwind CSS 構建的響應式設計
- 🔧 **完整的API支持**: 支持 GET、POST、PUT、DELETE 請求方法
- 🔐 **安全認證**: 支持 API 密鑰和自定義請求頭
- 📊 **實時監控**: 顯示響應時間、狀態碼和詳細響應內容
- 📚 **歷史記錄**: 自動保存最近的20條請求記錄
- ⌨️ **快捷鍵支持**: Ctrl+Enter 快速發送請求
- 🌐 **CORS支持**: 支持跨域請求測試

## �� 快速開始

1. **打開應用**: 直接在瀏覽器中打開 `index.html` 文件
2. **配置API**: 在左側面板輸入您的API端點和配置
3. **發送請求**: 點擊"發送請求"按鈕或使用 Ctrl+Enter 快捷鍵
4. **查看結果**: 在右側面板查看響應結果和歷史記錄

## 📋 使用說明

### API 配置
- **API 端點**: 輸入完整的API URL（例如：`https://api.example.com/v1/users`）
- **API 密鑰**: 如果需要認證，輸入您的API密鑰
- **請求方法**: 選擇 HTTP 請求方法（GET、POST、PUT、DELETE）

### 請求參數
- **請求頭**: 以JSON格式輸入自定義請求頭
  ```json
  {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
  ```
- **請求體**: 對於POST/PUT請求，以JSON格式輸入請求數據
  ```json
  {
    "name": "張三",
    "email": "zhangsan@example.com"
  }
  ```

### 響應信息
- **狀態指示器**: 綠色表示成功，紅色表示失敗，黃色表示發送中
- **響應時間**: 顯示請求的響應時間（毫秒）
- **響應內容**: 格式化顯示API返回的JSON數據

## 🛠️ 技術棧

- **前端框架**: 原生 HTML5 + JavaScript
- **UI框架**: Tailwind CSS (CDN)
- **HTTP客户端**: jQuery AJAX
- **數據存儲**: LocalStorage (瀏覽器本地存儲)

## 📱 響應式設計

應用完全響應式，支持：
- 桌面端（推薦）
- 平板設備
- 移動設備

## 🔧 自定義配置

### 修改默認設置
在 `index.html` 文件的底部，您可以修改默認的API端點：

```javascript
// 示例數據填充
$('#apiEndpoint').val('https://your-api-endpoint.com');
$('#headers').val('{\n  "Content-Type": "application/json"\n}');
```

### 添加新的請求方法
在HTML中的select元素中添加新的選項：

```html
<select id="httpMethod">
    <option value="GET">GET</option>
    <option value="POST">POST</option>
    <option value="PUT">PUT</option>
    <option value="DELETE">DELETE</option>
    <option value="PATCH">PATCH</option>  <!-- 新增 -->
</select>
```

## 🚨 注意事項

1. **CORS限制**: 某些API可能因為CORS策略而無法直接訪問
2. **HTTPS要求**: 現代瀏覽器要求HTTPS環境下的某些功能
3. **API密鑰安全**: 請勿在公共環境中輸入敏感信息
4. **歷史記錄**: 數據存儲在瀏覽器本地，清除瀏覽器數據會丢失歷史記錄

## 🎯 示例API

應用預置了一個測試API端點：
- **URL**: `https://jsonplaceholder.typicode.com/posts/1`
- **方法**: GET
- **描述**: 返回示例JSON數據，用於測試連接

## 📄 許可證

MIT License - 可自由使用和修改

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request 來改進這個項目！

---

**享受您的API測試體驗！** 🎉
