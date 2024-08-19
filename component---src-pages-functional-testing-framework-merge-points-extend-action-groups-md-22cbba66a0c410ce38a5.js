"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[4010],{9920:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return m}});var o=n(58168),r=n(80045),c=(n(88763),n(15680)),i=n(83407);const d=["components"],s={},l={_frontmatter:s},u=i.A;function m(e){let{components:t}=e,n=(0,r.A)(e,d);return(0,c.mdx)(u,(0,o.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("h1",{id:"extend-action-groups"},"Extend action groups"),(0,c.mdx)("p",null,"Extending an action group doesn't affect the existing action group."),(0,c.mdx)("p",null,"In this example we add a ",(0,c.mdx)("inlineCode",{parentName:"p"},"<click>")," command to check the checkbox that our extension added with a new action group for the simple product creation form."),(0,c.mdx)("h2",{id:"starting-action-group"},"Starting action group"),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-xml"},'<actionGroup name="AdminFillSimpleProductFormActionGroup">\n    <arguments>\n        <argument name="category"/>\n        <argument name="simpleProduct"/>\n    </arguments>\n    <amOnPage url="{{AdminProductIndexPage.url}}" stepKey="navigateToProductIndex"/>\n    <click selector="{{AdminProductGridActionSection.addProductToggle}}" stepKey="clickAddProductDropdown"/>\n    <click selector="{{AdminProductGridActionSection.addSimpleProduct}}" stepKey="clickAddSimpleProduct"/>\n    <fillField userInput="{{simpleProduct.name}}" selector="{{AdminProductFormSection.productName}}" stepKey="fillName"/>\n    <fillField userInput="{{simpleProduct.sku}}" selector="{{AdminProductFormSection.productSku}}" stepKey="fillSKU"/>\n    <fillField userInput="{{simpleProduct.price}}" selector="{{AdminProductFormSection.productPrice}}" stepKey="fillPrice"/>\n    <fillField userInput="{{simpleProduct.quantity}}" selector="{{AdminProductFormSection.productQuantity}}" stepKey="fillQuantity"/>\n    <searchAndMultiSelectOption selector="{{AdminProductFormSection.categoriesDropdown}}" parameterArray="[{{category.name}}]" stepKey="searchAndSelectCategory"/>\n    <click selector="{{AdminProductSEOSection.sectionHeader}}" stepKey="openSeoSection"/>\n    <fillField userInput="{{simpleProduct.urlKey}}" selector="{{AdminProductSEOSection.urlKeyInput}}" stepKey="fillUrlKey"/>\n    <click selector="{{AdminProductFormActionSection.saveButton}}" stepKey="saveProduct"/>\n    <seeElement selector="{{AdminProductMessagesSection.successMessage}}" stepKey="assertSaveMessageSuccess"/>\n    <seeInField userInput="{{simpleProduct.name}}" selector="{{AdminProductFormSection.productName}}" stepKey="assertFieldName"/>\n    <seeInField userInput="{{simpleProduct.sku}}" selector="{{AdminProductFormSection.productSku}}" stepKey="assertFieldSku"/>\n    <seeInField userInput="{{simpleProduct.price}}" selector="{{AdminProductFormSection.productPrice}}" stepKey="assertFieldPrice"/>\n    <click selector="{{AdminProductSEOSection.sectionHeader}}" stepKey="openSeoSectionAssert"/>\n    <seeInField userInput="{{simpleProduct.urlKey}}" selector="{{AdminProductSEOSection.urlKeyInput}}" stepKey="assertFieldUrlKey"/>\n</actionGroup>\n')),(0,c.mdx)("h2",{id:"extend-file"},"Extend file"),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-xml"},'<actionGroup name="AdminFillSimpleProductFormWithMyExtensionActionGroup" extends="AdminFillSimpleProductFormActionGroup">\n    \x3c!-- This will be added after the step "fillQuantity" on line 12 in the above test. --\x3e\n    <click selector="{{MyExtensionSection.myCheckbox}}" stepKey="clickMyCheckbox" after="fillQuantity"/>\n</actionGroup>\n')),(0,c.mdx)("h2",{id:"resultant-action-group"},"Resultant action group"),(0,c.mdx)("p",null,"Note that there are now two action groups below."),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-xml"},'<actionGroup name="AdminFillSimpleProductFormActionGroup">\n    <arguments>\n        <argument name="category"/>\n        <argument name="simpleProduct"/>\n    </arguments>\n    <amOnPage url="{{AdminProductIndexPage.url}}" stepKey="navigateToProductIndex"/>\n    <click selector="{{AdminProductGridActionSection.addProductToggle}}" stepKey="clickAddProductDropdown"/>\n    <click selector="{{AdminProductGridActionSection.addSimpleProduct}}" stepKey="clickAddSimpleProduct"/>\n    <fillField userInput="{{simpleProduct.name}}" selector="{{AdminProductFormSection.productName}}" stepKey="fillName"/>\n    <fillField userInput="{{simpleProduct.sku}}" selector="{{AdminProductFormSection.productSku}}" stepKey="fillSKU"/>\n    <fillField userInput="{{simpleProduct.price}}" selector="{{AdminProductFormSection.productPrice}}" stepKey="fillPrice"/>\n    <fillField userInput="{{simpleProduct.quantity}}" selector="{{AdminProductFormSection.productQuantity}}" stepKey="fillQuantity"/>\n    <searchAndMultiSelectOption selector="{{AdminProductFormSection.categoriesDropdown}}" parameterArray="[{{category.name}}]" stepKey="searchAndSelectCategory"/>\n    <click selector="{{AdminProductSEOSection.sectionHeader}}" stepKey="openSeoSection"/>\n    <fillField userInput="{{simpleProduct.urlKey}}" selector="{{AdminProductSEOSection.urlKeyInput}}" stepKey="fillUrlKey"/>\n    <click selector="{{AdminProductFormActionSection.saveButton}}" stepKey="saveProduct"/>\n    <seeElement selector="{{AdminProductMessagesSection.successMessage}}" stepKey="assertSaveMessageSuccess"/>\n    <seeInField userInput="{{simpleProduct.name}}" selector="{{AdminProductFormSection.productName}}" stepKey="assertFieldName"/>\n    <seeInField userInput="{{simpleProduct.sku}}" selector="{{AdminProductFormSection.productSku}}" stepKey="assertFieldSku"/>\n    <seeInField userInput="{{simpleProduct.price}}" selector="{{AdminProductFormSection.productPrice}}" stepKey="assertFieldPrice"/>\n    <click selector="{{AdminProductSEOSection.sectionHeader}}" stepKey="openSeoSectionAssert"/>\n    <seeInField userInput="{{simpleProduct.urlKey}}" selector="{{AdminProductSEOSection.urlKeyInput}}" stepKey="assertFieldUrlKey"/>\n</actionGroup>\n<actionGroup name="AdminFillSimpleProductFormWithMyExtensionActionGroup">\n    <arguments>\n        <argument name="category"/>\n        <argument name="simpleProduct"/>\n    </arguments>\n    <amOnPage url="{{AdminProductIndexPage.url}}" stepKey="navigateToProductIndex"/>\n    <click selector="{{AdminProductGridActionSection.addProductToggle}}" stepKey="clickAddProductDropdown"/>\n    <click selector="{{AdminProductGridActionSection.addSimpleProduct}}" stepKey="clickAddSimpleProduct"/>\n    <fillField userInput="{{simpleProduct.name}}" selector="{{AdminProductFormSection.productName}}" stepKey="fillName"/>\n    <fillField userInput="{{simpleProduct.sku}}" selector="{{AdminProductFormSection.productSku}}" stepKey="fillSKU"/>\n    <fillField userInput="{{simpleProduct.price}}" selector="{{AdminProductFormSection.productPrice}}" stepKey="fillPrice"/>\n    <fillField userInput="{{simpleProduct.quantity}}" selector="{{AdminProductFormSection.productQuantity}}" stepKey="fillQuantity"/>\n\n    <click selector="{{MyExtensionSection.myCheckbox}}" stepKey="clickMyCheckbox"/>\n\n    <searchAndMultiSelectOption selector="{{AdminProductFormSection.categoriesDropdown}}" parameterArray="[{{category.name}}]" stepKey="searchAndSelectCategory"/>\n    <click selector="{{AdminProductSEOSection.sectionHeader}}" stepKey="openSeoSection"/>\n    <fillField userInput="{{simpleProduct.urlKey}}" selector="{{AdminProductSEOSection.urlKeyInput}}" stepKey="fillUrlKey"/>\n    <click selector="{{AdminProductFormActionSection.saveButton}}" stepKey="saveProduct"/>\n    <seeElement selector="{{AdminProductMessagesSection.successMessage}}" stepKey="assertSaveMessageSuccess"/>\n    <seeInField userInput="{{simpleProduct.name}}" selector="{{AdminProductFormSection.productName}}" stepKey="assertFieldName"/>\n    <seeInField userInput="{{simpleProduct.sku}}" selector="{{AdminProductFormSection.productSku}}" stepKey="assertFieldSku"/>\n    <seeInField userInput="{{simpleProduct.price}}" selector="{{AdminProductFormSection.productPrice}}" stepKey="assertFieldPrice"/>\n    <click selector="{{AdminProductSEOSection.sectionHeader}}" stepKey="openSeoSectionAssert"/>\n    <seeInField userInput="{{simpleProduct.urlKey}}" selector="{{AdminProductSEOSection.urlKeyInput}}" stepKey="assertFieldUrlKey"/>\n</actionGroup>\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-functional-testing-framework-merge-points-extend-action-groups-md-22cbba66a0c410ce38a5.js.map