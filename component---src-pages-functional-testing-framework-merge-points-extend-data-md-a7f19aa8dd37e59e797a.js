"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[6013],{65993:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return y},default:function(){return m}});var n=a(58168),d=a(80045),i=(a(88763),a(15680)),u=a(83407);const r=["components"],y={},s={_frontmatter:y},o=u.A;function m(t){let{components:e}=t,a=(0,d.A)(t,r);return(0,i.mdx)(o,(0,n.A)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"extend-data-entities"},"Extend data entities"),(0,i.mdx)("p",null,"Extending a data entity does not affect the existing data entity."),(0,i.mdx)("p",null,"In this example we update the quantity to 1001 and add a new piece of data relevant to our extension. Unlike merging, this will ",(0,i.mdx)("em",{parentName:"p"},"not")," affect any other tests that use this data entity."),(0,i.mdx)("h2",{id:"starting-entity"},"Starting entity"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<entity name="SimpleProduct" type="product">\n    <data key="sku" unique="suffix">SimpleProduct</data>\n    <data key="type_id">simple</data>\n    <data key="attribute_set_id">4</data>\n    <data key="name" unique="suffix">SimpleProduct</data>\n    <data key="price">123.00</data>\n    <data key="visibility">4</data>\n    <data key="status">1</data>\n    <data key="quantity">1000</data>\n    <data key="urlKey" unique="suffix">simpleproduct</data>\n    <data key="weight">1</data>\n    <requiredEntity type="product_extension_attribute">EavStockItem</requiredEntity>\n    <requiredEntity type="custom_attribute_array">CustomAttributeCategoryIds</requiredEntity>\n</entity>\n')),(0,i.mdx)("h2",{id:"extend-file"},"Extend file"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<entity name="ExtensionProduct" type="product" extends="SimpleProduct">\n    \x3c!-- myExtensionData will simply be added to the product and quantity will be changed to 1001. --\x3e\n    <data key="quantity">1001</data>\n    <data key="myExtensionData">dataHere</data>\n</entity>\n')),(0,i.mdx)("h2",{id:"resultant-entity"},"Resultant entity"),(0,i.mdx)("p",null,"Note that there are now two data entities below."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<entity name="SimpleProduct" type="product">\n    <data key="sku" unique="suffix">SimpleProduct</data>\n    <data key="type_id">simple</data>\n    <data key="attribute_set_id">4</data>\n    <data key="name" unique="suffix">SimpleProduct</data>\n    <data key="price">123.00</data>\n    <data key="visibility">4</data>\n    <data key="status">1</data>\n    <data key="quantity">1000</data>\n    <data key="urlKey" unique="suffix">simpleproduct</data>\n    <data key="weight">1</data>\n    <requiredEntity type="product_extension_attribute">EavStockItem</requiredEntity>\n    <requiredEntity type="custom_attribute_array">CustomAttributeCategoryIds</requiredEntity>\n</entity>\n<entity name="ExtensionProduct" type="product">\n    <data key="sku" unique="suffix">SimpleProduct</data>\n    <data key="type_id">simple</data>\n    <data key="attribute_set_id">4</data>\n    <data key="name" unique="suffix">SimpleProduct</data>\n    <data key="price">123.00</data>\n    <data key="visibility">4</data>\n    <data key="status">1</data>\n    <data key="quantity">1001</data>\n    <data key="urlKey" unique="suffix">simpleproduct</data>\n    <data key="weight">1</data>\n    <requiredEntity type="product_extension_attribute">EavStockItem</requiredEntity>\n    <requiredEntity type="custom_attribute_array">CustomAttributeCategoryIds</requiredEntity>\n    <data key="myExtensionData">dataHere</data>\n</entity>\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-functional-testing-framework-merge-points-extend-data-md-a7f19aa8dd37e59e797a.js.map