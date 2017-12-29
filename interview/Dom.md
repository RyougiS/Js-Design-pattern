## DOM
DOM : Document Object Model 文档对象模型
会利用节点树的模式来表现文档,每个节点代表文档构成部分
 DOM 提供了一种表述形式— 将文档作为一个结构化的节点组以及包含属性和方法的对象。

>DOM下有document接口 document接口包含了属性，方法，事件对象

##  Document

Document接口描述了任何类型的文档的公共属性和方法。

- createAttribute(String name)
- createDocumentFragment()
- createElement()
- createTextNode()
- getElementById(String id)
- getElementsByClassName()
- getElementsByTagName()
- querySelector(String selector)
- querySelectorAll(String selector)
- getElementsByName(String name)
- write(String text)
- domain
- body


## Node

Node是一个接口，许多DOM类型从这个接口继承，并允许类似地处理（或测试）这些各种类型。

- childNodes
- firstChild    如果该节点没有子节点则返回null
- nextSibling   返回与该节点同级的下一个节点，如果没有返回null。
- nodeName
- nodeType
- nodeValue     返回或设置当前节点的值
- parentNode
- parentElement
- previousSibling
- appendChild(child)
- cloneNode(boolean)   boolean判断是否需要深度克隆
- insertBefore()  在当前节点的某个子节点之前再插入一个子节点
    - MDN(MDN)[https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore]
- removeChild()
- replaceChild(newChild, oldChild)


### nodeType

- ELEMENT_NODE    1
- ATTRIBUTE_NODE  2  `弃用`
- TEXT_NODE   3
- CDATA_SECTION\_NODE  4 `弃用`
- ENTITY_REFERENCE\_NODE   5 `弃用`
- ENTITY_NODE     6 `弃用`
- PROCESSING_INSTRUCTION\_NODE 7
- COMMENT_NODE    8
- DOCUMENT_NODE   9
- DOCUMENT_TYPE\_NODE  10
- DOCUMENT_FRAGMENT\_NODE  11
- NOTATION_NODE   12 `弃用`


## documen.write和 innerHTML的区别

  document.write只能重绘整个页面

  innerHTML可以重绘页面的一部分


