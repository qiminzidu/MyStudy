// 不要在这里重复声明 searchInitialized
if (typeof searchInitialized === 'undefined') {
    searchInitialized = false; // 仅在未定义时初始化它
}

function highlightSearchTerm(text, query) {
    const regex = new RegExp(`(${query})`, 'gi'); // 创建正则表达式，以不区分大小写匹配
    return text.replace(regex, '<span style="color: red;">$1</span>'); // 用红色标记
}

function setupSearch() {
    if (searchInitialized) return; // 如果已初始化，直接返回

    const input = document.getElementById("local-search-input");
    const resultsContainer = document.getElementById("local-search-results");
    const modal = document.getElementById("myModal"); // 使用新的类名
    const closeModal = document.getElementById("closeButton"); // 使用新的类名

    if (input) {
        input.addEventListener("input", function() {
            const query = input.value.toLowerCase();
            resultsContainer.innerHTML = ""; // 清空结果

            fetch('/search.xml')
                .then(response => response.text())
                .then(data => {
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(data, "text/xml");
                    const entries = xmlDoc.getElementsByTagName("entry");
                    const seenTitles = new Set(); // 用于去重

                    for (let i = 0; i < entries.length; i++) {
                        const title = entries[i].getElementsByTagName("title")[0].textContent;
                        const url = entries[i].getElementsByTagName("url")[0].textContent;
                        const content = entries[i].getElementsByTagName("content")[0].textContent;

                        // 过滤匹配
                        if ((title.toLowerCase().includes(query) || content.toLowerCase().includes(query)) && !seenTitles.has(title)) {
                            seenTitles.add(title); // 添加到已见集合，确保不重复

                            // 从内容中提取摘要（假设提取前300个字符作为摘要）
                            const summary = content.replace(/<[^>]*>/g, '').substring(0, 300); // 去除 HTML 标签

                            const highlightedTitle = highlightSearchTerm(title, query); // 处理标题
                            const highlightedSummary = highlightSearchTerm(summary, query); // 处理摘要

                            const resultItem = document.createElement("div");
                            resultItem.className = "search-result"; // 增加类名用于样式
                            resultItem.innerHTML = `<a href="${url}">${highlightedTitle}</a><p>${highlightedSummary}...</p>`; // 添加高亮显示的标题和摘要
                            resultsContainer.appendChild(resultItem);
                        }
                    }

                    if (resultsContainer.innerHTML === "") {
                        resultsContainer.innerHTML = "<p>没有找到相关结果。</p>";
                    } else {
                        modal.style.display = "block"; // 显示模态框
                    }
                })
                .catch(error => console.error('Error loading search.xml:', error));
        });
    } else {
        console.error('搜索输入框未找到。');
    }

    // 关闭模态框的事件
    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    // 点击模态框外部关闭模态框
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    searchInitialized = true; // 设置为已初始化
}

// 页面加载完成时设置搜索
document.addEventListener("DOMContentLoaded", setupSearch); 
