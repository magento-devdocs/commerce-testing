"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[2780],{5358:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return d},default:function(){return s}});var t=n(58168),i=n(80045),m=(n(88763),n(15680)),r=n(83407);const l=["components"],d={},o={_frontmatter:d},p=r.A;function s(e){let{components:a}=e,n=(0,i.A)(e,l);return(0,m.mdx)(p,(0,t.A)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"page-structure"},"Page structure"),(0,m.mdx)("p",null,"The Functional Testing Framework uses a modified concept of ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/selenium/wiki/PageObjects"},"PageObjects"),", which models the testing areas of your page as objects within the code.\nThis reduces occurrences of duplicated code and enables you to fix things quickly, in one place, when things change.\nYou define the contents of a page, for reference in a ",(0,m.mdx)("a",{parentName:"p",href:"test/index.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"<test>")),", at both the ",(0,m.mdx)("a",{parentName:"p",href:"#page"},(0,m.mdx)("inlineCode",{parentName:"a"},"<page>"))," and ",(0,m.mdx)("a",{parentName:"p",href:"#section"},(0,m.mdx)("inlineCode",{parentName:"a"},"<section>"))," level."),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"pageObject")," lists the URL of the ",(0,m.mdx)("inlineCode",{parentName:"p"},"page")," and the ",(0,m.mdx)("inlineCode",{parentName:"p"},"sections")," that it contains.\nYou can reuse ",(0,m.mdx)("inlineCode",{parentName:"p"},"sections")," to define the elements on a page that are exercisable, while also ensuring a single source of truth to help maintain consistency."),(0,m.mdx)("p",null,"Avoid hardcoded location selectors from tests to increase the maintainability and readability of the tests, as well as improve the test execution output and logging."),(0,m.mdx)("p",null,"Two types of pages are available:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Page with ",(0,m.mdx)("inlineCode",{parentName:"li"},"url")," declared as a constant string or ",(0,m.mdx)("a",{parentName:"li",href:"#explicit-page"},"explicit page")," - In a test it is called in a format like ",(0,m.mdx)("inlineCode",{parentName:"li"},"{{NameOfPage.url}}"),", where ",(0,m.mdx)("inlineCode",{parentName:"li"},"NameOfPage")," is a value of ",(0,m.mdx)("inlineCode",{parentName:"li"},"name")," in the corresponding page declaration ",(0,m.mdx)("inlineCode",{parentName:"li"},"*.xml")," file."),(0,m.mdx)("li",{parentName:"ul"},"Page with ",(0,m.mdx)("inlineCode",{parentName:"li"},"url")," declared as a string with one or more variables or ",(0,m.mdx)("a",{parentName:"li",href:"#parameterized-page"},"parameterized page")),(0,m.mdx)("li",{parentName:"ul"},"In a test it is called using a format like ",(0,m.mdx)("inlineCode",{parentName:"li"},"{{NameOfPage.url(var1, var2, ...)}}"),", where ",(0,m.mdx)("inlineCode",{parentName:"li"},"var1, var2")," etc. are parameters that will be substituted in the ",(0,m.mdx)("inlineCode",{parentName:"li"},"url")," of the corresponding ",(0,m.mdx)("inlineCode",{parentName:"li"},"<page>")," declaration.")),(0,m.mdx)("p",null,"The following diagram shows the XML structure of a Functional Testing Framework page:"),(0,m.mdx)("p",null,(0,m.mdx)("img",{parentName:"p",src:"/commerce-testing/assets/16d4a0b11c2e5f1c100f1ee896d47cb5/page-dia.svg",alt:"XML Structure of a Functional Testing Framework page"})),(0,m.mdx)("h2",{id:"format"},"Format"),(0,m.mdx)("p",null,"The format of ",(0,m.mdx)("inlineCode",{parentName:"p"},"<page>")," is:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<pages xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:noNamespaceSchemaLocation="urn:magento:mftf:Page/etc/PageObject.xsd">\n   <page name="" url="" module="" area="">\n      <section name=""/>\n      <section name=""/>\n   </page>\n</pages>\n')),(0,m.mdx)("h2",{id:"principles"},"Principles"),(0,m.mdx)("p",null,"The following conventions apply to pages:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"<page>")," name is the same as the filename."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"<page>")," name must be alphanumeric."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"*Page.xml")," is stored in the ",(0,m.mdx)("em",{parentName:"li"},"Page")," directory of a module."),(0,m.mdx)("li",{parentName:"ul"},"The name format is ",(0,m.mdx)("inlineCode",{parentName:"li"},"{Admin|Storefront}{PageDescription}Page.xml"),"."),(0,m.mdx)("li",{parentName:"ul"},"One ",(0,m.mdx)("inlineCode",{parentName:"li"},"<page>")," tag is allowed per page XML file.")),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},".url")," attribute is required when using the page for ",(0,m.mdx)("a",{parentName:"p",href:"test/actions.md"},"actions")," that require the URL argument."),(0,m.mdx)("h2",{id:"page-examples"},"Page examples"),(0,m.mdx)("p",null,"These examples demonstrate explicit and parameterized pages and include informative explanations."),(0,m.mdx)("h3",{id:"explicit-page"},"Explicit page"),(0,m.mdx)("p",null,"Example (",(0,m.mdx)("em",{parentName:"p"},"Catalog/Page/AdminCategoryPage.xml")," file):"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<pages xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:noNamespaceSchemaLocation="urn:magento:mftf:Page/etc/PageObject.xsd">\n   <page name="AdminCategoryPage" url="catalog/category/" module="Magento_Catalog" area="admin">\n      <section name="AdminCategorySidebarActionSection"/>\n      <section name="AdminCategorySidebarTreeSection"/>\n      <section name="AdminCategoryBasicFieldSection"/>\n      <section name="AdminCategorySEOSection"/>\n   </page>\n</pages>\n')),(0,m.mdx)("p",null,"In this example, the ",(0,m.mdx)("em",{parentName:"p"},"Catalog/Page/AdminCategoryPage.xml")," file declares a page with the name ",(0,m.mdx)("inlineCode",{parentName:"p"},"AdminCategoryPage"),".\nIt will be merged with the other ",(0,m.mdx)("inlineCode",{parentName:"p"},"AdminCategoryPage")," pages from other modules."),(0,m.mdx)("p",null,"The corresponding web page is generated by the Catalog module and is called by the ",(0,m.mdx)("inlineCode",{parentName:"p"},"baseUrl")," + ",(0,m.mdx)("inlineCode",{parentName:"p"},"backendName")," + ",(0,m.mdx)("inlineCode",{parentName:"p"},"catalog/category/")," URL."),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"AdminCategoryPage")," declares four ",(0,m.mdx)("a",{parentName:"p",href:"section/index.md"},"sections"),":"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"AdminCategorySidebarActionSection")," - located in the ",(0,m.mdx)("inlineCode",{parentName:"li"},"Catalog/Section/AdminCategorySidebarActionSection.xml")," file"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"AdminCategorySidebarTreeSection")," - located in the ",(0,m.mdx)("inlineCode",{parentName:"li"},"Catalog/Section/AdminCategorySidebarTreeSection.xml")," file"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"AdminCategoryBasicFieldSection")," - located in the ",(0,m.mdx)("inlineCode",{parentName:"li"},"Catalog/Section/AdminCategoryBasicFieldSection.xml")," file"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"AdminCategorySEOSection")," - located in the ",(0,m.mdx)("inlineCode",{parentName:"li"},"Catalog/Section/AdminCategorySEOSection.xml")," file")),(0,m.mdx)("p",null,"The following is an example of a call in test:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<amOnPage url="{{AdminCategoryPage.url}}" stepKey="navigateToAdminCategory"/>\n')),(0,m.mdx)("h3",{id:"parameterized-page"},"Parameterized page"),(0,m.mdx)("p",null,"Example (",(0,m.mdx)("em",{parentName:"p"},"Catalog/Page/StorefrontCategoryPage.xml")," file):"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<pages xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:noNamespaceSchemaLocation="urn:magento:mftf:Page/etc/PageObject.xsd">\n   <page name="StorefrontCategoryPage" url="/{{var1}}.html" module="Magento_Catalog" parameterized="true" area="storefront">\n      <section name="StorefrontCategoryMainSection"/>\n   </page>\n</pages>\n')),(0,m.mdx)("p",null,"This example shows the page with the name ",(0,m.mdx)("inlineCode",{parentName:"p"},"StorefrontCategoryPage"),".\nIt will be merged with the other ",(0,m.mdx)("inlineCode",{parentName:"p"},"StorefrontCategoryPage")," pages from other modules."),(0,m.mdx)("p",null,"The following is an example of a call in a test:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<amOnPage url="{{StorefrontCategoryPage.url($createPreReqCategory.name$)}}" stepKey="navigateToCategoryPage"/>\n')),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"StorefrontCategoryPage")," page is declared as parameterized, where the ",(0,m.mdx)("inlineCode",{parentName:"p"},"url")," contains a ",(0,m.mdx)("inlineCode",{parentName:"p"},"{{var1}}")," parameter."),(0,m.mdx)("p",null,"The corresponding web page is generated by the Catalog module and is called by the ",(0,m.mdx)("inlineCode",{parentName:"p"},"baseUrl"),"+",(0,m.mdx)("inlineCode",{parentName:"p"},"/$createPreReqCategory.name$.html")," URL."),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"{{var1}}")," is substituted with the ",(0,m.mdx)("inlineCode",{parentName:"p"},"name")," of the previously created category in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"createPreReqCategory")," action."),(0,m.mdx)("p",null,"See also ",(0,m.mdx)("a",{parentName:"p",href:"test/actions.md#createdata"},(0,m.mdx)("inlineCode",{parentName:"a"},"<createData>")),"."),(0,m.mdx)("hr",null),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"StorefrontCategoryPage")," page declares only the ",(0,m.mdx)("inlineCode",{parentName:"p"},"StorefrontCategoryMainSection")," ",(0,m.mdx)("a",{parentName:"p",href:"section/index.md"},"section"),", which is located in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"Catalog/Section/StorefrontCategoryMainSection.xml")," file."),(0,m.mdx)("h2",{id:"elements-reference"},"Elements reference"),(0,m.mdx)("p",null,"There are several XML elements that are used in ",(0,m.mdx)("inlineCode",{parentName:"p"},"<page>")," in the MFTF."),(0,m.mdx)("h3",{id:"pages"},"pages"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"<pages>")," are elements that point to the corresponding XML Schema location.\nIt contains only one ",(0,m.mdx)("inlineCode",{parentName:"p"},"<page>")," element."),(0,m.mdx)("h3",{id:"page"},"page"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"<page>")," contains a sequence of UI sections in a page."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attributes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Use"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"name")),(0,m.mdx)("td",{parentName:"tr",align:null},"string"),(0,m.mdx)("td",{parentName:"tr",align:null},"required"),(0,m.mdx)("td",{parentName:"tr",align:null},"Unique page name identifier.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"url")),(0,m.mdx)("td",{parentName:"tr",align:null},"string"),(0,m.mdx)("td",{parentName:"tr",align:null},"required"),(0,m.mdx)("td",{parentName:"tr",align:null},"URL path (excluding the base URL) for the page. Use parameterized notation (",(0,m.mdx)("inlineCode",{parentName:"td"},"{{var1}}"),") for replaceable parameters, such as the edit page for a persisted entity that is based on an ID or a name.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"module")),(0,m.mdx)("td",{parentName:"tr",align:null},"string"),(0,m.mdx)("td",{parentName:"tr",align:null},"required"),(0,m.mdx)("td",{parentName:"tr",align:null},"Name of the module to which the page belongs. The name must be prefixed with a vendor name. It corresponds to the parent directory where the module with tests is stored. Example: ",(0,m.mdx)("inlineCode",{parentName:"td"},'"Magento_Catalog"'),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"area")),(0,m.mdx)("td",{parentName:"tr",align:null},"string"),(0,m.mdx)("td",{parentName:"tr",align:null},"required"),(0,m.mdx)("td",{parentName:"tr",align:null},"The area where this page lives. Three possible values: ",(0,m.mdx)("inlineCode",{parentName:"td"},"admin")," prepends ",(0,m.mdx)("inlineCode",{parentName:"td"},"BACKEND_NAME")," to ",(0,m.mdx)("inlineCode",{parentName:"td"},"url"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"storefront")," does not prepend anything to ",(0,m.mdx)("inlineCode",{parentName:"td"},"url"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"external")," flags the page for use with ",(0,m.mdx)("inlineCode",{parentName:"td"},"amOnUrl"),". The ",(0,m.mdx)("inlineCode",{parentName:"td"},"url")," provided must be a full URL, such as ",(0,m.mdx)("inlineCode",{parentName:"td"},"http://myFullUrl.com/"),", instead of the URL for a page.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"parameterized")),(0,m.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,m.mdx)("td",{parentName:"tr",align:null},"optional"),(0,m.mdx)("td",{parentName:"tr",align:null},"Include and set to ",(0,m.mdx)("inlineCode",{parentName:"td"},'"true"')," if the ",(0,m.mdx)("inlineCode",{parentName:"td"},"url")," for this page has parameters that need to be replaced for proper use.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"remove")),(0,m.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,m.mdx)("td",{parentName:"tr",align:null},"optional"),(0,m.mdx)("td",{parentName:"tr",align:null},"The default value is ",(0,m.mdx)("inlineCode",{parentName:"td"},'"false"'),". Set to ",(0,m.mdx)("inlineCode",{parentName:"td"},'"true"')," to remove this element during parsing.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"deprecated")),(0,m.mdx)("td",{parentName:"tr",align:null},"string"),(0,m.mdx)("td",{parentName:"tr",align:null},"optional"),(0,m.mdx)("td",{parentName:"tr",align:null},"Used to warn about the future deprecation of the data entity. String will appear in Allure reports and console output at runtime.")))),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"<page>")," may contain several ",(0,m.mdx)("a",{parentName:"p",href:"#section"},(0,m.mdx)("inlineCode",{parentName:"a"},"<section>"))," elements."),(0,m.mdx)("h3",{id:"section"},"section"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"<section>")," contains the sequence of UI elements.\nA section is a reusable piece or part of a page."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attributes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Use"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"name")),(0,m.mdx)("td",{parentName:"tr",align:null},"string"),(0,m.mdx)("td",{parentName:"tr",align:null},"required"),(0,m.mdx)("td",{parentName:"tr",align:null},"Unique section name identifier.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"remove")),(0,m.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,m.mdx)("td",{parentName:"tr",align:null},"optional"),(0,m.mdx)("td",{parentName:"tr",align:null},"The default value is ",(0,m.mdx)("inlineCode",{parentName:"td"},'"false"'),". Set to ",(0,m.mdx)("inlineCode",{parentName:"td"},'"true"')," to remove this element during parsing.")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-functional-testing-framework-page-md-ed21ea2f8658e19a721d.js.map