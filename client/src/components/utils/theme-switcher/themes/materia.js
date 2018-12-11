export default `
/*!
* Bootswatch v4.1.3
* Homepage: https://bootswatch.com
* Copyright 2012-2018 Thomas Park
* Licensed under MIT
* Based on Bootstrap
*/
/*!
* Bootstrap v4.1.3 (https://getbootstrap.com/)
* Copyright 2011-2018 The Bootstrap Authors
* Copyright 2011-2018 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
/* @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"); */
@font-face {
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 300;
	src: local('Roboto Light'), local('Roboto-Light'), url('/assets/fonts/Roboto-Light.ttf') format('truetype');
}
@font-face {
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	src: local('Roboto'), local('Roboto-Regular'), url('/assets/fonts/Roboto-Regular.ttf') format('truetype');
}
@font-face {
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 500;
	src: local('Roboto Medium'), local('Roboto-Medium'), url('/assets/fonts/Roboto-Medium.ttf') format('truetype');
}
@font-face {
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 700;
	src: local('Roboto Bold'), local('Roboto-Bold'), url('/assets/fonts/Roboto-Bold.ttf') format('truetype');
}

:root {
	--blue: #2196F3;
	--indigo: #6610f2;
	--purple: #6f42c1;
	--pink: #e83e8c;
	--red: #e51c23;
	--orange: #fd7e14;
	--yellow: #ff9800;
	--green: #4CAF50;
	--teal: #20c997;
	--cyan: #9C27B0;
	--white: #fff;
	--gray: #666;
	--gray-dark: #222;
	--primary: #2196F3;
	--secondary: #fff;
	--success: #4CAF50;
	--info: #9C27B0;
	--warning: #ff9800;
	--danger: #e51c23;
	--light: #fff;
	--dark: #222;
	--breakpoint-xs: 0;
	--breakpoint-sm: 576px;
	--breakpoint-md: 768px;
	--breakpoint-lg: 992px;
	--breakpoint-xl: 1200px;
	--font-family-sans-serif: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	--font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

*,
*::before,
*::after {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

html {
	font-family: sans-serif;
	line-height: 1.15;
	-webkit-text-size-adjust: 100%;
	-ms-text-size-adjust: 100%;
	-ms-overflow-style: scrollbar;
	-webkit-tap-highlight-color: transparent;
}

@-ms-viewport {
	width: device-width;
}

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
	display: block;
}

body {
	margin: 0;
	font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 0.8125rem;
	font-weight: 400;
	line-height: 1.5;
	color: #444;
	text-align: left;
	background-color: #fff;
}

[tabindex="-1"]:focus {
	outline: 0 !important;
}

hr {
	-webkit-box-sizing: content-box;
	box-sizing: content-box;
	height: 0;
	overflow: visible;
}

h1, h2, h3, h4, h5, h6 {
	margin-top: 0;
	margin-bottom: 0.5rem;
}

p {
	margin-top: 0;
	margin-bottom: 1rem;
}

abbr[title],
abbr[data-original-title] {
	text-decoration: underline;
	-webkit-text-decoration: underline dotted;
	text-decoration: underline dotted;
	cursor: help;
	border-bottom: 0;
}

address {
	margin-bottom: 1rem;
	font-style: normal;
	line-height: inherit;
}

ol,
ul,
dl {
	margin-top: 0;
	margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
	margin-bottom: 0;
}

dt {
	font-weight: 700;
}

dd {
	margin-bottom: .5rem;
	margin-left: 0;
}

blockquote {
	margin: 0 0 1rem;
}

dfn {
	font-style: italic;
}

b,
strong {
	font-weight: bolder;
}

small {
	font-size: 80%;
}

sub,
sup {
	position: relative;
	font-size: 75%;
	line-height: 0;
	vertical-align: baseline;
}

sub {
	bottom: -.25em;
}

sup {
	top: -.5em;
}

a {
	color: #2196F3;
	text-decoration: none;
	background-color: transparent;
	-webkit-text-decoration-skip: objects;
}

a:hover {
	color: #0a6ebd;
	text-decoration: underline;
}

a:not([href]):not([tabindex]) {
	color: inherit;
	text-decoration: none;
}

a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {
	color: inherit;
	text-decoration: none;
}

a:not([href]):not([tabindex]):focus {
	outline: 0;
}

pre,
code,
kbd,
samp {
	font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
	font-size: 1em;
}

pre {
	margin-top: 0;
	margin-bottom: 1rem;
	overflow: auto;
	-ms-overflow-style: scrollbar;
}

figure {
	margin: 0 0 1rem;
}

img {
	vertical-align: middle;
	border-style: none;
}

svg {
	overflow: hidden;
	vertical-align: middle;
}

table {
	border-collapse: collapse;
}

caption {
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
	color: #666;
	text-align: left;
	caption-side: bottom;
}

th {
	text-align: inherit;
}

label {
	display: inline-block;
	margin-bottom: 0.5rem;
}

button {
	border-radius: 0;
}

button:focus {
	outline: 1px dotted;
	outline: 5px auto -webkit-focus-ring-color;
}

input,
button,
select,
optgroup,
textarea {
	margin: 0;
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
}

button,
input {
	overflow: visible;
}

button,
select {
	text-transform: none;
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
	-webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
	padding: 0;
	border-style: none;
}

input[type="radio"],
input[type="checkbox"] {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	padding: 0;
}

input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
	-webkit-appearance: listbox;
}

textarea {
	overflow: auto;
	resize: vertical;
}

fieldset {
	min-width: 0;
	padding: 0;
	margin: 0;
	border: 0;
}

legend {
	display: block;
	width: 100%;
	max-width: 100%;
	padding: 0;
	margin-bottom: .5rem;
	font-size: 1.5rem;
	line-height: inherit;
	color: inherit;
	white-space: normal;
}

progress {
	vertical-align: baseline;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
	height: auto;
}

[type="search"] {
	outline-offset: -2px;
	-webkit-appearance: none;
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
	-webkit-appearance: none;
}

::-webkit-file-upload-button {
	font: inherit;
	-webkit-appearance: button;
}

output {
	display: inline-block;
}

summary {
	display: list-item;
	cursor: pointer;
}

template {
	display: none;
}

[hidden] {
	display: none !important;
}

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
	margin-bottom: 0.5rem;
	font-family: inherit;
	font-weight: 500;
	line-height: 1.2;
	color: inherit;
}

h1, .h1 {
	font-size: 2.03125rem;
}

h2, .h2 {
	font-size: 1.625rem;
}

h3, .h3 {
	font-size: 1.421875rem;
}

h4, .h4 {
	font-size: 1.21875rem;
}

h5, .h5 {
	font-size: 1.015625rem;
}

h6, .h6 {
	font-size: 0.8125rem;
}

.lead {
	font-size: 1.015625rem;
	font-weight: 300;
}

.display-1 {
	font-size: 6rem;
	font-weight: 300;
	line-height: 1.2;
}

.display-2 {
	font-size: 5.5rem;
	font-weight: 300;
	line-height: 1.2;
}

.display-3 {
	font-size: 4.5rem;
	font-weight: 300;
	line-height: 1.2;
}

.display-4 {
	font-size: 3.5rem;
	font-weight: 300;
	line-height: 1.2;
}

hr {
	margin-top: 1rem;
	margin-bottom: 1rem;
	border: 0;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
}

small,
.small {
	font-size: 80%;
	font-weight: 400;
}

mark,
.mark {
	padding: 0.2em;
	background-color: #fcf8e3;
}

.list-unstyled {
	padding-left: 0;
	list-style: none;
}

.list-inline {
	padding-left: 0;
	list-style: none;
}

.list-inline-item {
	display: inline-block;
}

.list-inline-item:not(:last-child) {
	margin-right: 0.5rem;
}

.initialism {
	font-size: 90%;
	text-transform: uppercase;
}

.blockquote {
	margin-bottom: 1rem;
	font-size: 1.015625rem;
}

.blockquote-footer {
	display: block;
	font-size: 80%;
	color: #666;
}

.blockquote-footer::before {
	content: "\\014 \\0A0";
}

.img-fluid {
	max-width: 100%;
	height: auto;
}

.img-thumbnail {
	padding: 0.25rem;
	background-color: #fff;
	border: 1px solid #dee2e6;
	border-radius: 0.25rem;
	max-width: 100%;
	height: auto;
}

.figure {
	display: inline-block;
}

.figure-img {
	margin-bottom: 0.5rem;
	line-height: 1;
}

.figure-caption {
	font-size: 90%;
	color: #666;
}

code {
	font-size: 87.5%;
	color: #e83e8c;
	word-break: break-word;
}

a > code {
	color: inherit;
}

kbd {
	padding: 0.2rem 0.4rem;
	font-size: 87.5%;
	color: #fff;
	background-color: #212121;
	border-radius: 0.2rem;
}

kbd kbd {
	padding: 0;
	font-size: 100%;
	font-weight: 700;
}

pre {
	display: block;
	font-size: 87.5%;
	color: #212121;
}

pre code {
	font-size: inherit;
	color: inherit;
	word-break: normal;
}

.pre-scrollable {
	max-height: 340px;
	overflow-y: scroll;
}

.container {
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
}

@media (min-width: 576px) {
	.container {
	max-width: 540px;
	}
}

@media (min-width: 768px) {
	.container {
	max-width: 720px;
	}
}

@media (min-width: 992px) {
	.container {
	max-width: 960px;
	}
}

@media (min-width: 1200px) {
	.container {
	max-width: 1140px;
	}
}

.container-fluid {
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
}

.row {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	margin-right: -15px;
	margin-left: -15px;
}

.no-gutters {
	margin-right: 0;
	margin-left: 0;
}

.no-gutters > .col,
.no-gutters > [class*="col-"] {
	padding-right: 0;
	padding-left: 0;
}

.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,
.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,
.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,
.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,
.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,
.col-xl-auto {
	position: relative;
	width: 100%;
	min-height: 1px;
	padding-right: 15px;
	padding-left: 15px;
}

.col {
	-ms-flex-preferred-size: 0;
	flex-basis: 0;
	-webkit-box-flex: 1;
	-ms-flex-positive: 1;
	flex-grow: 1;
	max-width: 100%;
}

.col-auto {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 auto;
	flex: 0 0 auto;
	width: auto;
	max-width: none;
}

.col-1 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 8.3333333333%;
	flex: 0 0 8.3333333333%;
	max-width: 8.3333333333%;
}

.col-2 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 16.6666666667%;
	flex: 0 0 16.6666666667%;
	max-width: 16.6666666667%;
}

.col-3 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 25%;
	flex: 0 0 25%;
	max-width: 25%;
}

.col-4 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 33.3333333333%;
	flex: 0 0 33.3333333333%;
	max-width: 33.3333333333%;
}

.col-5 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 41.6666666667%;
	flex: 0 0 41.6666666667%;
	max-width: 41.6666666667%;
}

.col-6 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 50%;
	flex: 0 0 50%;
	max-width: 50%;
}

.col-7 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 58.3333333333%;
	flex: 0 0 58.3333333333%;
	max-width: 58.3333333333%;
}

.col-8 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 66.6666666667%;
	flex: 0 0 66.6666666667%;
	max-width: 66.6666666667%;
}

.col-9 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 75%;
	flex: 0 0 75%;
	max-width: 75%;
}

.col-10 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 83.3333333333%;
	flex: 0 0 83.3333333333%;
	max-width: 83.3333333333%;
}

.col-11 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 91.6666666667%;
	flex: 0 0 91.6666666667%;
	max-width: 91.6666666667%;
}

.col-12 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 100%;
	flex: 0 0 100%;
	max-width: 100%;
}

.order-first {
	-webkit-box-ordinal-group: 0;
	-ms-flex-order: -1;
	order: -1;
}

.order-last {
	-webkit-box-ordinal-group: 14;
	-ms-flex-order: 13;
	order: 13;
}

.order-0 {
	-webkit-box-ordinal-group: 1;
	-ms-flex-order: 0;
	order: 0;
}

.order-1 {
	-webkit-box-ordinal-group: 2;
	-ms-flex-order: 1;
	order: 1;
}

.order-2 {
	-webkit-box-ordinal-group: 3;
	-ms-flex-order: 2;
	order: 2;
}

.order-3 {
	-webkit-box-ordinal-group: 4;
	-ms-flex-order: 3;
	order: 3;
}

.order-4 {
	-webkit-box-ordinal-group: 5;
	-ms-flex-order: 4;
	order: 4;
}

.order-5 {
	-webkit-box-ordinal-group: 6;
	-ms-flex-order: 5;
	order: 5;
}

.order-6 {
	-webkit-box-ordinal-group: 7;
	-ms-flex-order: 6;
	order: 6;
}

.order-7 {
	-webkit-box-ordinal-group: 8;
	-ms-flex-order: 7;
	order: 7;
}

.order-8 {
	-webkit-box-ordinal-group: 9;
	-ms-flex-order: 8;
	order: 8;
}

.order-9 {
	-webkit-box-ordinal-group: 10;
	-ms-flex-order: 9;
	order: 9;
}

.order-10 {
	-webkit-box-ordinal-group: 11;
	-ms-flex-order: 10;
	order: 10;
}

.order-11 {
	-webkit-box-ordinal-group: 12;
	-ms-flex-order: 11;
	order: 11;
}

.order-12 {
	-webkit-box-ordinal-group: 13;
	-ms-flex-order: 12;
	order: 12;
}

.offset-1 {
	margin-left: 8.3333333333%;
}

.offset-2 {
	margin-left: 16.6666666667%;
}

.offset-3 {
	margin-left: 25%;
}

.offset-4 {
	margin-left: 33.3333333333%;
}

.offset-5 {
	margin-left: 41.6666666667%;
}

.offset-6 {
	margin-left: 50%;
}

.offset-7 {
	margin-left: 58.3333333333%;
}

.offset-8 {
	margin-left: 66.6666666667%;
}

.offset-9 {
	margin-left: 75%;
}

.offset-10 {
	margin-left: 83.3333333333%;
}

.offset-11 {
	margin-left: 91.6666666667%;
}

@media (min-width: 576px) {
	.col-sm {
	-ms-flex-preferred-size: 0;
	flex-basis: 0;
	-webkit-box-flex: 1;
	-ms-flex-positive: 1;
	flex-grow: 1;
	max-width: 100%;
	}
	.col-sm-auto {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 auto;
	flex: 0 0 auto;
	width: auto;
	max-width: none;
	}
	.col-sm-1 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 8.3333333333%;
	flex: 0 0 8.3333333333%;
	max-width: 8.3333333333%;
	}
	.col-sm-2 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 16.6666666667%;
	flex: 0 0 16.6666666667%;
	max-width: 16.6666666667%;
	}
	.col-sm-3 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 25%;
	flex: 0 0 25%;
	max-width: 25%;
	}
	.col-sm-4 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 33.3333333333%;
	flex: 0 0 33.3333333333%;
	max-width: 33.3333333333%;
	}
	.col-sm-5 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 41.6666666667%;
	flex: 0 0 41.6666666667%;
	max-width: 41.6666666667%;
	}
	.col-sm-6 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 50%;
	flex: 0 0 50%;
	max-width: 50%;
	}
	.col-sm-7 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 58.3333333333%;
	flex: 0 0 58.3333333333%;
	max-width: 58.3333333333%;
	}
	.col-sm-8 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 66.6666666667%;
	flex: 0 0 66.6666666667%;
	max-width: 66.6666666667%;
	}
	.col-sm-9 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 75%;
	flex: 0 0 75%;
	max-width: 75%;
	}
	.col-sm-10 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 83.3333333333%;
	flex: 0 0 83.3333333333%;
	max-width: 83.3333333333%;
	}
	.col-sm-11 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 91.6666666667%;
	flex: 0 0 91.6666666667%;
	max-width: 91.6666666667%;
	}
	.col-sm-12 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 100%;
	flex: 0 0 100%;
	max-width: 100%;
	}
	.order-sm-first {
	-webkit-box-ordinal-group: 0;
	-ms-flex-order: -1;
	order: -1;
	}
	.order-sm-last {
	-webkit-box-ordinal-group: 14;
	-ms-flex-order: 13;
	order: 13;
	}
	.order-sm-0 {
	-webkit-box-ordinal-group: 1;
	-ms-flex-order: 0;
	order: 0;
	}
	.order-sm-1 {
	-webkit-box-ordinal-group: 2;
	-ms-flex-order: 1;
	order: 1;
	}
	.order-sm-2 {
	-webkit-box-ordinal-group: 3;
	-ms-flex-order: 2;
	order: 2;
	}
	.order-sm-3 {
	-webkit-box-ordinal-group: 4;
	-ms-flex-order: 3;
	order: 3;
	}
	.order-sm-4 {
	-webkit-box-ordinal-group: 5;
	-ms-flex-order: 4;
	order: 4;
	}
	.order-sm-5 {
	-webkit-box-ordinal-group: 6;
	-ms-flex-order: 5;
	order: 5;
	}
	.order-sm-6 {
	-webkit-box-ordinal-group: 7;
	-ms-flex-order: 6;
	order: 6;
	}
	.order-sm-7 {
	-webkit-box-ordinal-group: 8;
	-ms-flex-order: 7;
	order: 7;
	}
	.order-sm-8 {
	-webkit-box-ordinal-group: 9;
	-ms-flex-order: 8;
	order: 8;
	}
	.order-sm-9 {
	-webkit-box-ordinal-group: 10;
	-ms-flex-order: 9;
	order: 9;
	}
	.order-sm-10 {
	-webkit-box-ordinal-group: 11;
	-ms-flex-order: 10;
	order: 10;
	}
	.order-sm-11 {
	-webkit-box-ordinal-group: 12;
	-ms-flex-order: 11;
	order: 11;
	}
	.order-sm-12 {
	-webkit-box-ordinal-group: 13;
	-ms-flex-order: 12;
	order: 12;
	}
	.offset-sm-0 {
	margin-left: 0;
	}
	.offset-sm-1 {
	margin-left: 8.3333333333%;
	}
	.offset-sm-2 {
	margin-left: 16.6666666667%;
	}
	.offset-sm-3 {
	margin-left: 25%;
	}
	.offset-sm-4 {
	margin-left: 33.3333333333%;
	}
	.offset-sm-5 {
	margin-left: 41.6666666667%;
	}
	.offset-sm-6 {
	margin-left: 50%;
	}
	.offset-sm-7 {
	margin-left: 58.3333333333%;
	}
	.offset-sm-8 {
	margin-left: 66.6666666667%;
	}
	.offset-sm-9 {
	margin-left: 75%;
	}
	.offset-sm-10 {
	margin-left: 83.3333333333%;
	}
	.offset-sm-11 {
	margin-left: 91.6666666667%;
	}
}

@media (min-width: 768px) {
	.col-md {
	-ms-flex-preferred-size: 0;
	flex-basis: 0;
	-webkit-box-flex: 1;
	-ms-flex-positive: 1;
	flex-grow: 1;
	max-width: 100%;
	}
	.col-md-auto {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 auto;
	flex: 0 0 auto;
	width: auto;
	max-width: none;
	}
	.col-md-1 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 8.3333333333%;
	flex: 0 0 8.3333333333%;
	max-width: 8.3333333333%;
	}
	.col-md-2 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 16.6666666667%;
	flex: 0 0 16.6666666667%;
	max-width: 16.6666666667%;
	}
	.col-md-3 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 25%;
	flex: 0 0 25%;
	max-width: 25%;
	}
	.col-md-4 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 33.3333333333%;
	flex: 0 0 33.3333333333%;
	max-width: 33.3333333333%;
	}
	.col-md-5 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 41.6666666667%;
	flex: 0 0 41.6666666667%;
	max-width: 41.6666666667%;
	}
	.col-md-6 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 50%;
	flex: 0 0 50%;
	max-width: 50%;
	}
	.col-md-7 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 58.3333333333%;
	flex: 0 0 58.3333333333%;
	max-width: 58.3333333333%;
	}
	.col-md-8 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 66.6666666667%;
	flex: 0 0 66.6666666667%;
	max-width: 66.6666666667%;
	}
	.col-md-9 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 75%;
	flex: 0 0 75%;
	max-width: 75%;
	}
	.col-md-10 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 83.3333333333%;
	flex: 0 0 83.3333333333%;
	max-width: 83.3333333333%;
	}
	.col-md-11 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 91.6666666667%;
	flex: 0 0 91.6666666667%;
	max-width: 91.6666666667%;
	}
	.col-md-12 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 100%;
	flex: 0 0 100%;
	max-width: 100%;
	}
	.order-md-first {
	-webkit-box-ordinal-group: 0;
	-ms-flex-order: -1;
	order: -1;
	}
	.order-md-last {
	-webkit-box-ordinal-group: 14;
	-ms-flex-order: 13;
	order: 13;
	}
	.order-md-0 {
	-webkit-box-ordinal-group: 1;
	-ms-flex-order: 0;
	order: 0;
	}
	.order-md-1 {
	-webkit-box-ordinal-group: 2;
	-ms-flex-order: 1;
	order: 1;
	}
	.order-md-2 {
	-webkit-box-ordinal-group: 3;
	-ms-flex-order: 2;
	order: 2;
	}
	.order-md-3 {
	-webkit-box-ordinal-group: 4;
	-ms-flex-order: 3;
	order: 3;
	}
	.order-md-4 {
	-webkit-box-ordinal-group: 5;
	-ms-flex-order: 4;
	order: 4;
	}
	.order-md-5 {
	-webkit-box-ordinal-group: 6;
	-ms-flex-order: 5;
	order: 5;
	}
	.order-md-6 {
	-webkit-box-ordinal-group: 7;
	-ms-flex-order: 6;
	order: 6;
	}
	.order-md-7 {
	-webkit-box-ordinal-group: 8;
	-ms-flex-order: 7;
	order: 7;
	}
	.order-md-8 {
	-webkit-box-ordinal-group: 9;
	-ms-flex-order: 8;
	order: 8;
	}
	.order-md-9 {
	-webkit-box-ordinal-group: 10;
	-ms-flex-order: 9;
	order: 9;
	}
	.order-md-10 {
	-webkit-box-ordinal-group: 11;
	-ms-flex-order: 10;
	order: 10;
	}
	.order-md-11 {
	-webkit-box-ordinal-group: 12;
	-ms-flex-order: 11;
	order: 11;
	}
	.order-md-12 {
	-webkit-box-ordinal-group: 13;
	-ms-flex-order: 12;
	order: 12;
	}
	.offset-md-0 {
	margin-left: 0;
	}
	.offset-md-1 {
	margin-left: 8.3333333333%;
	}
	.offset-md-2 {
	margin-left: 16.6666666667%;
	}
	.offset-md-3 {
	margin-left: 25%;
	}
	.offset-md-4 {
	margin-left: 33.3333333333%;
	}
	.offset-md-5 {
	margin-left: 41.6666666667%;
	}
	.offset-md-6 {
	margin-left: 50%;
	}
	.offset-md-7 {
	margin-left: 58.3333333333%;
	}
	.offset-md-8 {
	margin-left: 66.6666666667%;
	}
	.offset-md-9 {
	margin-left: 75%;
	}
	.offset-md-10 {
	margin-left: 83.3333333333%;
	}
	.offset-md-11 {
	margin-left: 91.6666666667%;
	}
}

@media (min-width: 992px) {
	.col-lg {
	-ms-flex-preferred-size: 0;
	flex-basis: 0;
	-webkit-box-flex: 1;
	-ms-flex-positive: 1;
	flex-grow: 1;
	max-width: 100%;
	}
	.col-lg-auto {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 auto;
	flex: 0 0 auto;
	width: auto;
	max-width: none;
	}
	.col-lg-1 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 8.3333333333%;
	flex: 0 0 8.3333333333%;
	max-width: 8.3333333333%;
	}
	.col-lg-2 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 16.6666666667%;
	flex: 0 0 16.6666666667%;
	max-width: 16.6666666667%;
	}
	.col-lg-3 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 25%;
	flex: 0 0 25%;
	max-width: 25%;
	}
	.col-lg-4 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 33.3333333333%;
	flex: 0 0 33.3333333333%;
	max-width: 33.3333333333%;
	}
	.col-lg-5 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 41.6666666667%;
	flex: 0 0 41.6666666667%;
	max-width: 41.6666666667%;
	}
	.col-lg-6 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 50%;
	flex: 0 0 50%;
	max-width: 50%;
	}
	.col-lg-7 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 58.3333333333%;
	flex: 0 0 58.3333333333%;
	max-width: 58.3333333333%;
	}
	.col-lg-8 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 66.6666666667%;
	flex: 0 0 66.6666666667%;
	max-width: 66.6666666667%;
	}
	.col-lg-9 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 75%;
	flex: 0 0 75%;
	max-width: 75%;
	}
	.col-lg-10 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 83.3333333333%;
	flex: 0 0 83.3333333333%;
	max-width: 83.3333333333%;
	}
	.col-lg-11 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 91.6666666667%;
	flex: 0 0 91.6666666667%;
	max-width: 91.6666666667%;
	}
	.col-lg-12 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 100%;
	flex: 0 0 100%;
	max-width: 100%;
	}
	.order-lg-first {
	-webkit-box-ordinal-group: 0;
	-ms-flex-order: -1;
	order: -1;
	}
	.order-lg-last {
	-webkit-box-ordinal-group: 14;
	-ms-flex-order: 13;
	order: 13;
	}
	.order-lg-0 {
	-webkit-box-ordinal-group: 1;
	-ms-flex-order: 0;
	order: 0;
	}
	.order-lg-1 {
	-webkit-box-ordinal-group: 2;
	-ms-flex-order: 1;
	order: 1;
	}
	.order-lg-2 {
	-webkit-box-ordinal-group: 3;
	-ms-flex-order: 2;
	order: 2;
	}
	.order-lg-3 {
	-webkit-box-ordinal-group: 4;
	-ms-flex-order: 3;
	order: 3;
	}
	.order-lg-4 {
	-webkit-box-ordinal-group: 5;
	-ms-flex-order: 4;
	order: 4;
	}
	.order-lg-5 {
	-webkit-box-ordinal-group: 6;
	-ms-flex-order: 5;
	order: 5;
	}
	.order-lg-6 {
	-webkit-box-ordinal-group: 7;
	-ms-flex-order: 6;
	order: 6;
	}
	.order-lg-7 {
	-webkit-box-ordinal-group: 8;
	-ms-flex-order: 7;
	order: 7;
	}
	.order-lg-8 {
	-webkit-box-ordinal-group: 9;
	-ms-flex-order: 8;
	order: 8;
	}
	.order-lg-9 {
	-webkit-box-ordinal-group: 10;
	-ms-flex-order: 9;
	order: 9;
	}
	.order-lg-10 {
	-webkit-box-ordinal-group: 11;
	-ms-flex-order: 10;
	order: 10;
	}
	.order-lg-11 {
	-webkit-box-ordinal-group: 12;
	-ms-flex-order: 11;
	order: 11;
	}
	.order-lg-12 {
	-webkit-box-ordinal-group: 13;
	-ms-flex-order: 12;
	order: 12;
	}
	.offset-lg-0 {
	margin-left: 0;
	}
	.offset-lg-1 {
	margin-left: 8.3333333333%;
	}
	.offset-lg-2 {
	margin-left: 16.6666666667%;
	}
	.offset-lg-3 {
	margin-left: 25%;
	}
	.offset-lg-4 {
	margin-left: 33.3333333333%;
	}
	.offset-lg-5 {
	margin-left: 41.6666666667%;
	}
	.offset-lg-6 {
	margin-left: 50%;
	}
	.offset-lg-7 {
	margin-left: 58.3333333333%;
	}
	.offset-lg-8 {
	margin-left: 66.6666666667%;
	}
	.offset-lg-9 {
	margin-left: 75%;
	}
	.offset-lg-10 {
	margin-left: 83.3333333333%;
	}
	.offset-lg-11 {
	margin-left: 91.6666666667%;
	}
}

@media (min-width: 1200px) {
	.col-xl {
	-ms-flex-preferred-size: 0;
	flex-basis: 0;
	-webkit-box-flex: 1;
	-ms-flex-positive: 1;
	flex-grow: 1;
	max-width: 100%;
	}
	.col-xl-auto {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 auto;
	flex: 0 0 auto;
	width: auto;
	max-width: none;
	}
	.col-xl-1 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 8.3333333333%;
	flex: 0 0 8.3333333333%;
	max-width: 8.3333333333%;
	}
	.col-xl-2 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 16.6666666667%;
	flex: 0 0 16.6666666667%;
	max-width: 16.6666666667%;
	}
	.col-xl-3 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 25%;
	flex: 0 0 25%;
	max-width: 25%;
	}
	.col-xl-4 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 33.3333333333%;
	flex: 0 0 33.3333333333%;
	max-width: 33.3333333333%;
	}
	.col-xl-5 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 41.6666666667%;
	flex: 0 0 41.6666666667%;
	max-width: 41.6666666667%;
	}
	.col-xl-6 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 50%;
	flex: 0 0 50%;
	max-width: 50%;
	}
	.col-xl-7 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 58.3333333333%;
	flex: 0 0 58.3333333333%;
	max-width: 58.3333333333%;
	}
	.col-xl-8 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 66.6666666667%;
	flex: 0 0 66.6666666667%;
	max-width: 66.6666666667%;
	}
	.col-xl-9 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 75%;
	flex: 0 0 75%;
	max-width: 75%;
	}
	.col-xl-10 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 83.3333333333%;
	flex: 0 0 83.3333333333%;
	max-width: 83.3333333333%;
	}
	.col-xl-11 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 91.6666666667%;
	flex: 0 0 91.6666666667%;
	max-width: 91.6666666667%;
	}
	.col-xl-12 {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 100%;
	flex: 0 0 100%;
	max-width: 100%;
	}
	.order-xl-first {
	-webkit-box-ordinal-group: 0;
	-ms-flex-order: -1;
	order: -1;
	}
	.order-xl-last {
	-webkit-box-ordinal-group: 14;
	-ms-flex-order: 13;
	order: 13;
	}
	.order-xl-0 {
	-webkit-box-ordinal-group: 1;
	-ms-flex-order: 0;
	order: 0;
	}
	.order-xl-1 {
	-webkit-box-ordinal-group: 2;
	-ms-flex-order: 1;
	order: 1;
	}
	.order-xl-2 {
	-webkit-box-ordinal-group: 3;
	-ms-flex-order: 2;
	order: 2;
	}
	.order-xl-3 {
	-webkit-box-ordinal-group: 4;
	-ms-flex-order: 3;
	order: 3;
	}
	.order-xl-4 {
	-webkit-box-ordinal-group: 5;
	-ms-flex-order: 4;
	order: 4;
	}
	.order-xl-5 {
	-webkit-box-ordinal-group: 6;
	-ms-flex-order: 5;
	order: 5;
	}
	.order-xl-6 {
	-webkit-box-ordinal-group: 7;
	-ms-flex-order: 6;
	order: 6;
	}
	.order-xl-7 {
	-webkit-box-ordinal-group: 8;
	-ms-flex-order: 7;
	order: 7;
	}
	.order-xl-8 {
	-webkit-box-ordinal-group: 9;
	-ms-flex-order: 8;
	order: 8;
	}
	.order-xl-9 {
	-webkit-box-ordinal-group: 10;
	-ms-flex-order: 9;
	order: 9;
	}
	.order-xl-10 {
	-webkit-box-ordinal-group: 11;
	-ms-flex-order: 10;
	order: 10;
	}
	.order-xl-11 {
	-webkit-box-ordinal-group: 12;
	-ms-flex-order: 11;
	order: 11;
	}
	.order-xl-12 {
	-webkit-box-ordinal-group: 13;
	-ms-flex-order: 12;
	order: 12;
	}
	.offset-xl-0 {
	margin-left: 0;
	}
	.offset-xl-1 {
	margin-left: 8.3333333333%;
	}
	.offset-xl-2 {
	margin-left: 16.6666666667%;
	}
	.offset-xl-3 {
	margin-left: 25%;
	}
	.offset-xl-4 {
	margin-left: 33.3333333333%;
	}
	.offset-xl-5 {
	margin-left: 41.6666666667%;
	}
	.offset-xl-6 {
	margin-left: 50%;
	}
	.offset-xl-7 {
	margin-left: 58.3333333333%;
	}
	.offset-xl-8 {
	margin-left: 66.6666666667%;
	}
	.offset-xl-9 {
	margin-left: 75%;
	}
	.offset-xl-10 {
	margin-left: 83.3333333333%;
	}
	.offset-xl-11 {
	margin-left: 91.6666666667%;
	}
}

.table {
	width: 100%;
	margin-bottom: 1rem;
	background-color: transparent;
}

.table th,
.table td {
	padding: 0.75rem;
	vertical-align: top;
	border-top: 1px solid #dee2e6;
}

.table thead th {
	vertical-align: bottom;
	border-bottom: 2px solid #dee2e6;
}

.table tbody + tbody {
	border-top: 2px solid #dee2e6;
}

.table .table {
	background-color: #fff;
}

.table-sm th,
.table-sm td {
	padding: 0.3rem;
}

.table-bordered {
	border: 1px solid #dee2e6;
}

.table-bordered th,
.table-bordered td {
	border: 1px solid #dee2e6;
}

.table-bordered thead th,
.table-bordered thead td {
	border-bottom-width: 2px;
}

.table-borderless th,
.table-borderless td,
.table-borderless thead th,
.table-borderless tbody + tbody {
	border: 0;
}

.table-striped tbody tr:nth-of-type(odd) {
	background-color: rgba(0, 0, 0, 0.05);
}

.table-hover tbody tr:hover {
	background-color: rgba(0, 0, 0, 0.075);
}

.table-primary,
.table-primary > th,
.table-primary > td {
	background-color: #c1e2fc;
}

.table-hover .table-primary:hover {
	background-color: #a9d7fb;
}

.table-hover .table-primary:hover > td,
.table-hover .table-primary:hover > th {
	background-color: #a9d7fb;
}

.table-secondary,
.table-secondary > th,
.table-secondary > td {
	background-color: white;
}

.table-hover .table-secondary:hover {
	background-color: #f2f2f2;
}

.table-hover .table-secondary:hover > td,
.table-hover .table-secondary:hover > th {
	background-color: #f2f2f2;
}

.table-success,
.table-success > th,
.table-success > td {
	background-color: #cde9ce;
}

.table-hover .table-success:hover {
	background-color: #bbe1bd;
}

.table-hover .table-success:hover > td,
.table-hover .table-success:hover > th {
	background-color: #bbe1bd;
}

.table-info,
.table-info > th,
.table-info > td {
	background-color: #e3c3e9;
}

.table-hover .table-info:hover {
	background-color: #dab0e2;
}

.table-hover .table-info:hover > td,
.table-hover .table-info:hover > th {
	background-color: #dab0e2;
}

.table-warning,
.table-warning > th,
.table-warning > td {
	background-color: #ffe2b8;
}

.table-hover .table-warning:hover {
	background-color: #ffd89f;
}

.table-hover .table-warning:hover > td,
.table-hover .table-warning:hover > th {
	background-color: #ffd89f;
}

.table-danger,
.table-danger > th,
.table-danger > td {
	background-color: #f8bfc1;
}

.table-hover .table-danger:hover {
	background-color: #f5a8ab;
}

.table-hover .table-danger:hover > td,
.table-hover .table-danger:hover > th {
	background-color: #f5a8ab;
}

.table-light,
.table-light > th,
.table-light > td {
	background-color: white;
}

.table-hover .table-light:hover {
	background-color: #f2f2f2;
}

.table-hover .table-light:hover > td,
.table-hover .table-light:hover > th {
	background-color: #f2f2f2;
}

.table-dark,
.table-dark > th,
.table-dark > td {
	background-color: #c1c1c1;
}

.table-hover .table-dark:hover {
	background-color: #b4b4b4;
}

.table-hover .table-dark:hover > td,
.table-hover .table-dark:hover > th {
	background-color: #b4b4b4;
}

.table-active,
.table-active > th,
.table-active > td {
	background-color: rgba(0, 0, 0, 0.075);
}

.table-hover .table-active:hover {
	background-color: rgba(0, 0, 0, 0.075);
}

.table-hover .table-active:hover > td,
.table-hover .table-active:hover > th {
	background-color: rgba(0, 0, 0, 0.075);
}

.table .thead-dark th {
	color: #fff;
	background-color: #212121;
	border-color: #343434;
}

.table .thead-light th {
	color: #444;
	background-color: #eee;
	border-color: #dee2e6;
}

.table-dark {
	color: #fff;
	background-color: #212121;
}

.table-dark th,
.table-dark td,
.table-dark thead th {
	border-color: #343434;
}

.table-dark.table-bordered {
	border: 0;
}

.table-dark.table-striped tbody tr:nth-of-type(odd) {
	background-color: rgba(255, 255, 255, 0.05);
}

.table-dark.table-hover tbody tr:hover {
	background-color: rgba(255, 255, 255, 0.075);
}

@media (max-width: 575.98px) {
	.table-responsive-sm {
	display: block;
	width: 100%;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
	-ms-overflow-style: -ms-autohiding-scrollbar;
	}
	.table-responsive-sm > .table-bordered {
	border: 0;
	}
}

@media (max-width: 767.98px) {
	.table-responsive-md {
	display: block;
	width: 100%;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
	-ms-overflow-style: -ms-autohiding-scrollbar;
	}
	.table-responsive-md > .table-bordered {
	border: 0;
	}
}

@media (max-width: 991.98px) {
	.table-responsive-lg {
	display: block;
	width: 100%;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
	-ms-overflow-style: -ms-autohiding-scrollbar;
	}
	.table-responsive-lg > .table-bordered {
	border: 0;
	}
}

@media (max-width: 1199.98px) {
	.table-responsive-xl {
	display: block;
	width: 100%;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
	-ms-overflow-style: -ms-autohiding-scrollbar;
	}
	.table-responsive-xl > .table-bordered {
	border: 0;
	}
}

.table-responsive {
	display: block;
	width: 100%;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
	-ms-overflow-style: -ms-autohiding-scrollbar;
}

.table-responsive > .table-bordered {
	border: 0;
}

.form-control {
	display: block;
	width: 100%;
	height: calc(2.81875rem + 0rem);
	padding: 1rem 0;
	font-size: 0.8125rem;
	line-height: 1.5;
	color: #666;
	background-color: transparent;
	background-clip: padding-box;
	border: 0rem solid transparent;
	border-radius: 0;
	-webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
	transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}

@media screen and (prefers-reduced-motion: reduce) {
	.form-control {
	-webkit-transition: none;
	transition: none;
	}
}

.form-control::-ms-expand {
	background-color: transparent;
	border: 0;
}

.form-control:focus {
	color: #666;
	background-color: transparent;
	border-color: #9acffa;
	outline: 0;
	-webkit-box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
	box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
}

.form-control::-webkit-input-placeholder {
	color: rgba(0, 0, 0, 0.4);
	opacity: 1;
}

.form-control:-ms-input-placeholder {
	color: rgba(0, 0, 0, 0.4);
	opacity: 1;
}

.form-control::-ms-input-placeholder {
	color: rgba(0, 0, 0, 0.4);
	opacity: 1;
}

.form-control::placeholder {
	color: rgba(0, 0, 0, 0.4);
	opacity: 1;
}

.form-control:disabled, .form-control[readonly] {
	background-color: transparent;
	opacity: 1;
}

select.form-control:focus::-ms-value {
	color: #666;
	background-color: transparent;
}

.form-control-file,
.form-control-range {
	display: block;
	width: 100%;
}

.col-form-label {
	padding-top: calc(1rem + 0rem);
	padding-bottom: calc(1rem + 0rem);
	margin-bottom: 0;
	font-size: inherit;
	line-height: 1.5;
}

.col-form-label-lg {
	padding-top: calc(1.015625rem + 0rem);
	padding-bottom: calc(1.015625rem + 0rem);
	font-size: 1.015625rem;
	line-height: 1.5;
}

.col-form-label-sm {
	padding-top: calc(0.8125rem + 0rem);
	padding-bottom: calc(0.8125rem + 0rem);
	font-size: 0.7109375rem;
	line-height: 1.5;
}

.form-control-plaintext {
	display: block;
	width: 100%;
	padding-top: 1rem;
	padding-bottom: 1rem;
	margin-bottom: 0;
	line-height: 1.5;
	color: #444;
	background-color: transparent;
	border: solid transparent;
	border-width: 0rem 0;
}

.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
	padding-right: 0;
	padding-left: 0;
}

.form-control-sm {
	height: calc(1.56640625rem + 0rem);
	padding: 0.8125rem 0;
	font-size: 0.7109375rem;
	line-height: 1.5;
	border-radius: 0;
}

.form-control-lg {
	height: calc(2.5234375rem + 0rem);
	padding: 1.015625rem 0;
	font-size: 1.015625rem;
	line-height: 1.5;
	border-radius: 0;
}

select.form-control[size], select.form-control[multiple] {
	height: auto;
}

textarea.form-control {
	height: auto;
}

.form-group {
	margin-bottom: 1rem;
}

.form-text {
	display: block;
	margin-top: 0.25rem;
}

.form-row {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	margin-right: -5px;
	margin-left: -5px;
}

.form-row > .col,
.form-row > [class*="col-"] {
	padding-right: 5px;
	padding-left: 5px;
}

.form-check {
	position: relative;
	display: block;
	padding-left: 1.25rem;
}

.form-check-input {
	position: absolute;
	margin-top: 0.3rem;
	margin-left: -1.25rem;
}

.form-check-input:disabled ~ .form-check-label {
	color: #666;
}

.form-check-label {
	margin-bottom: 0;
}

.form-check-inline {
	display: -webkit-inline-box;
	display: -ms-inline-flexbox;
	display: inline-flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	padding-left: 0;
	margin-right: 0.75rem;
}

.form-check-inline .form-check-input {
	position: static;
	margin-top: 0;
	margin-right: 0.3125rem;
	margin-left: 0;
}

.valid-feedback {
	display: none;
	width: 100%;
	margin-top: 0.25rem;
	font-size: 80%;
	color: #4CAF50;
}

.valid-tooltip {
	position: absolute;
	top: 100%;
	z-index: 5;
	display: none;
	max-width: 100%;
	padding: 0.25rem 0.5rem;
	margin-top: .1rem;
	font-size: 0.7109375rem;
	line-height: 1.5;
	color: #fff;
	background-color: rgba(76, 175, 80, 0.9);
	border-radius: 0.25rem;
}

.was-validated .form-control:valid, .form-control.is-valid, .was-validated
.custom-select:valid,
.custom-select.is-valid {
	border-color: #4CAF50;
}

.was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated
.custom-select:valid:focus,
.custom-select.is-valid:focus {
	border-color: #4CAF50;
	-webkit-box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.25);
	box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.25);
}

.was-validated .form-control:valid ~ .valid-feedback,
.was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback,
.form-control.is-valid ~ .valid-tooltip, .was-validated
.custom-select:valid ~ .valid-feedback,
.was-validated
.custom-select:valid ~ .valid-tooltip,
.custom-select.is-valid ~ .valid-feedback,
.custom-select.is-valid ~ .valid-tooltip {
	display: block;
}

.was-validated .form-control-file:valid ~ .valid-feedback,
.was-validated .form-control-file:valid ~ .valid-tooltip, .form-control-file.is-valid ~ .valid-feedback,
.form-control-file.is-valid ~ .valid-tooltip {
	display: block;
}

.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
	color: #4CAF50;
}

.was-validated .form-check-input:valid ~ .valid-feedback,
.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,
.form-check-input.is-valid ~ .valid-tooltip {
	display: block;
}

.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {
	color: #4CAF50;
}

.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {
	background-color: #a3d7a5;
}

.was-validated .custom-control-input:valid ~ .valid-feedback,
.was-validated .custom-control-input:valid ~ .valid-tooltip, .custom-control-input.is-valid ~ .valid-feedback,
.custom-control-input.is-valid ~ .valid-tooltip {
	display: block;
}

.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {
	background: #6ec071 -webkit-gradient(linear, left top, left bottom, from(#84c987), to(#6ec071)) repeat-x;
	background: #6ec071 linear-gradient(180deg, #84c987, #6ec071) repeat-x;
}

.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {
	-webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(76, 175, 80, 0.25);
	box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(76, 175, 80, 0.25);
}

.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {
	border-color: #4CAF50;
}

.was-validated .custom-file-input:valid ~ .custom-file-label::after, .custom-file-input.is-valid ~ .custom-file-label::after {
	border-color: inherit;
}

.was-validated .custom-file-input:valid ~ .valid-feedback,
.was-validated .custom-file-input:valid ~ .valid-tooltip, .custom-file-input.is-valid ~ .valid-feedback,
.custom-file-input.is-valid ~ .valid-tooltip {
	display: block;
}

.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.25);
	box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.25);
}

.invalid-feedback {
	display: none;
	width: 100%;
	margin-top: 0.25rem;
	font-size: 80%;
	color: #e51c23;
}

.invalid-tooltip {
	position: absolute;
	top: 100%;
	z-index: 5;
	display: none;
	max-width: 100%;
	padding: 0.25rem 0.5rem;
	margin-top: .1rem;
	font-size: 0.7109375rem;
	line-height: 1.5;
	color: #fff;
	background-color: rgba(229, 28, 35, 0.9);
	border-radius: 0.25rem;
}

.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated
.custom-select:invalid,
.custom-select.is-invalid {
	border-color: #e51c23;
}

.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated
.custom-select:invalid:focus,
.custom-select.is-invalid:focus {
	border-color: #e51c23;
	-webkit-box-shadow: 0 0 0 0.2rem rgba(229, 28, 35, 0.25);
	box-shadow: 0 0 0 0.2rem rgba(229, 28, 35, 0.25);
}

.was-validated .form-control:invalid ~ .invalid-feedback,
.was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,
.form-control.is-invalid ~ .invalid-tooltip, .was-validated
.custom-select:invalid ~ .invalid-feedback,
.was-validated
.custom-select:invalid ~ .invalid-tooltip,
.custom-select.is-invalid ~ .invalid-feedback,
.custom-select.is-invalid ~ .invalid-tooltip {
	display: block;
}

.was-validated .form-control-file:invalid ~ .invalid-feedback,
.was-validated .form-control-file:invalid ~ .invalid-tooltip, .form-control-file.is-invalid ~ .invalid-feedback,
.form-control-file.is-invalid ~ .invalid-tooltip {
	display: block;
}

.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
	color: #e51c23;
}

.was-validated .form-check-input:invalid ~ .invalid-feedback,
.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,
.form-check-input.is-invalid ~ .invalid-tooltip {
	display: block;
}

.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {
	color: #e51c23;
}

.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {
	background-color: #f28e92;
}

.was-validated .custom-control-input:invalid ~ .invalid-feedback,
.was-validated .custom-control-input:invalid ~ .invalid-tooltip, .custom-control-input.is-invalid ~ .invalid-feedback,
.custom-control-input.is-invalid ~ .invalid-tooltip {
	display: block;
}

.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {
	background: #ea4a4f -webkit-gradient(linear, left top, left bottom, from(#ed656a), to(#ea4a4f)) repeat-x;
	background: #ea4a4f linear-gradient(180deg, #ed656a, #ea4a4f) repeat-x;
}

.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {
	-webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(229, 28, 35, 0.25);
	box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(229, 28, 35, 0.25);
}

.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {
	border-color: #e51c23;
}

.was-validated .custom-file-input:invalid ~ .custom-file-label::after, .custom-file-input.is-invalid ~ .custom-file-label::after {
	border-color: inherit;
}

.was-validated .custom-file-input:invalid ~ .invalid-feedback,
.was-validated .custom-file-input:invalid ~ .invalid-tooltip, .custom-file-input.is-invalid ~ .invalid-feedback,
.custom-file-input.is-invalid ~ .invalid-tooltip {
	display: block;
}

.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(229, 28, 35, 0.25);
	box-shadow: 0 0 0 0.2rem rgba(229, 28, 35, 0.25);
}

.form-inline {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-flow: row wrap;
	flex-flow: row wrap;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
}

.form-inline .form-check {
	width: 100%;
}

@media (min-width: 576px) {
	.form-inline label {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	margin-bottom: 0;
	}
	.form-inline .form-group {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-flex: 0;
	-ms-flex: 0 0 auto;
	flex: 0 0 auto;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-flow: row wrap;
	flex-flow: row wrap;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin-bottom: 0;
	}
	.form-inline .form-control {
	display: inline-block;
	width: auto;
	vertical-align: middle;
	}
	.form-inline .form-control-plaintext {
	display: inline-block;
	}
	.form-inline .input-group,
	.form-inline .custom-select {
	width: auto;
	}
	.form-inline .form-check {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	width: auto;
	padding-left: 0;
	}
	.form-inline .form-check-input {
	position: relative;
	margin-top: 0;
	margin-right: 0.25rem;
	margin-left: 0;
	}
	.form-inline .custom-control {
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	}
	.form-inline .custom-control-label {
	margin-bottom: 0;
	}
}

.btn {
	display: inline-block;
	font-weight: 400;
	text-align: center;
	white-space: nowrap;
	vertical-align: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	border: 1px solid transparent;
	padding: 0.8rem 1rem;
	font-size: 0.8125rem;
	line-height: 1.5;
	border-radius: 0.25rem;
	-webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}

@media screen and (prefers-reduced-motion: reduce) {
	.btn {
	-webkit-transition: none;
	transition: none;
	}
}

.btn:hover, .btn:focus {
	text-decoration: none;
}

.btn:focus, .btn.focus {
	outline: 0;
	-webkit-box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
	box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
}

.btn.disabled, .btn:disabled {
	opacity: 0.65;
}

.btn:not(:disabled):not(.disabled) {
	cursor: pointer;
}

a.btn.disabled,
fieldset:disabled a.btn {
	pointer-events: none;
}

.btn-primary {
	color: #fff;
	background: #2196F3 -webkit-gradient(linear, left top, left bottom, from(#42a6f5), to(#2196F3)) repeat-x;
	background: #2196F3 linear-gradient(180deg, #42a6f5, #2196F3) repeat-x;
	border-color: #2196F3;
}

.btn-primary:hover {
	color: #fff;
	background: #0c83e2 -webkit-gradient(linear, left top, left bottom, from(#3196e6), to(#0c83e2)) repeat-x;
	background: #0c83e2 linear-gradient(180deg, #3196e6, #0c83e2) repeat-x;
	border-color: #0c7cd5;
}

.btn-primary:focus, .btn-primary.focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.5);
}

.btn-primary.disabled, .btn-primary:disabled {
	color: #fff;
	background-color: #2196F3;
	border-color: #2196F3;
}

.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,
.show > .btn-primary.dropdown-toggle {
	color: #fff;
	background-color: #0c7cd5;
	background-image: none;
	border-color: #0b75c9;
}

.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,
.show > .btn-primary.dropdown-toggle:focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.5);
}

.btn-secondary {
	color: #212121;
	background: #fff -webkit-gradient(linear, left top, left bottom, from(white), to(#fff)) repeat-x;
	background: #fff linear-gradient(180deg, white, #fff) repeat-x;
	border-color: #fff;
}

.btn-secondary:hover {
	color: #212121;
	background: #ececec -webkit-gradient(linear, left top, left bottom, from(#efefef), to(#ececec)) repeat-x;
	background: #ececec linear-gradient(180deg, #efefef, #ececec) repeat-x;
	border-color: #e6e5e5;
}

.btn-secondary:focus, .btn-secondary.focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
}

.btn-secondary.disabled, .btn-secondary:disabled {
	color: #212121;
	background-color: #fff;
	border-color: #fff;
}

.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
	color: #212121;
	background-color: #e6e5e5;
	background-image: none;
	border-color: #dfdfdf;
}

.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
}

.btn-success {
	color: #fff;
	background: #4CAF50 -webkit-gradient(linear, left top, left bottom, from(#67bb6a), to(#4CAF50)) repeat-x;
	background: #4CAF50 linear-gradient(180deg, #67bb6a, #4CAF50) repeat-x;
	border-color: #4CAF50;
}

.btn-success:hover {
	color: #fff;
	background: #409444 -webkit-gradient(linear, left top, left bottom, from(#5da460), to(#409444)) repeat-x;
	background: #409444 linear-gradient(180deg, #5da460, #409444) repeat-x;
	border-color: #3d8b40;
}

.btn-success:focus, .btn-success.focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
}

.btn-success.disabled, .btn-success:disabled {
	color: #fff;
	background-color: #4CAF50;
	border-color: #4CAF50;
}

.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,
.show > .btn-success.dropdown-toggle {
	color: #fff;
	background-color: #3d8b40;
	background-image: none;
	border-color: #39833c;
}

.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,
.show > .btn-success.dropdown-toggle:focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
}

.btn-info {
	color: #fff;
	background: #9C27B0 -webkit-gradient(linear, left top, left bottom, from(#ab47bc), to(#9C27B0)) repeat-x;
	background: #9C27B0 linear-gradient(180deg, #ab47bc, #9C27B0) repeat-x;
	border-color: #9C27B0;
}

.btn-info:hover {
	color: #fff;
	background: #802091 -webkit-gradient(linear, left top, left bottom, from(#9342a1), to(#802091)) repeat-x;
	background: #802091 linear-gradient(180deg, #9342a1, #802091) repeat-x;
	border-color: #771e86;
}

.btn-info:focus, .btn-info.focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(156, 39, 176, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(156, 39, 176, 0.5);
}

.btn-info.disabled, .btn-info:disabled {
	color: #fff;
	background-color: #9C27B0;
	border-color: #9C27B0;
}

.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,
.show > .btn-info.dropdown-toggle {
	color: #fff;
	background-color: #771e86;
	background-image: none;
	border-color: #6e1b7c;
}

.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,
.show > .btn-info.dropdown-toggle:focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(156, 39, 176, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(156, 39, 176, 0.5);
}

.btn-warning {
	color: #fff;
	background: #ff9800 -webkit-gradient(linear, left top, left bottom, from(#ffa726), to(#ff9800)) repeat-x;
	background: #ff9800 linear-gradient(180deg, #ffa726, #ff9800) repeat-x;
	border-color: #ff9800;
}

.btn-warning:hover {
	color: #fff;
	background: #d98100 -webkit-gradient(linear, left top, left bottom, from(#de9426), to(#d98100)) repeat-x;
	background: #d98100 linear-gradient(180deg, #de9426, #d98100) repeat-x;
	border-color: #cc7a00;
}

.btn-warning:focus, .btn-warning.focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(255, 152, 0, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(255, 152, 0, 0.5);
}

.btn-warning.disabled, .btn-warning:disabled {
	color: #fff;
	background-color: #ff9800;
	border-color: #ff9800;
}

.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,
.show > .btn-warning.dropdown-toggle {
	color: #fff;
	background-color: #cc7a00;
	background-image: none;
	border-color: #bf7200;
}

.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,
.show > .btn-warning.dropdown-toggle:focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(255, 152, 0, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(255, 152, 0, 0.5);
}

.btn-danger {
	color: #fff;
	background: #e51c23 -webkit-gradient(linear, left top, left bottom, from(#e93e44), to(#e51c23)) repeat-x;
	background: #e51c23 linear-gradient(180deg, #e93e44, #e51c23) repeat-x;
	border-color: #e51c23;
}

.btn-danger:hover {
	color: #fff;
	background: #c4161d -webkit-gradient(linear, left top, left bottom, from(#cd393f), to(#c4161d)) repeat-x;
	background: #c4161d linear-gradient(180deg, #cd393f, #c4161d) repeat-x;
	border-color: #b9151b;
}

.btn-danger:focus, .btn-danger.focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(229, 28, 35, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(229, 28, 35, 0.5);
}

.btn-danger.disabled, .btn-danger:disabled {
	color: #fff;
	background-color: #e51c23;
	border-color: #e51c23;
}

.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,
.show > .btn-danger.dropdown-toggle {
	color: #fff;
	background-color: #b9151b;
	background-image: none;
	border-color: #ad1419;
}

.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,
.show > .btn-danger.dropdown-toggle:focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(229, 28, 35, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(229, 28, 35, 0.5);
}

.btn-light {
	color: #212121;
	background: #fff -webkit-gradient(linear, left top, left bottom, from(white), to(#fff)) repeat-x;
	background: #fff linear-gradient(180deg, white, #fff) repeat-x;
	border-color: #fff;
}

.btn-light:hover {
	color: #212121;
	background: #ececec -webkit-gradient(linear, left top, left bottom, from(#efefef), to(#ececec)) repeat-x;
	background: #ececec linear-gradient(180deg, #efefef, #ececec) repeat-x;
	border-color: #e6e5e5;
}

.btn-light:focus, .btn-light.focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
}

.btn-light.disabled, .btn-light:disabled {
	color: #212121;
	background-color: #fff;
	border-color: #fff;
}

.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,
.show > .btn-light.dropdown-toggle {
	color: #212121;
	background-color: #e6e5e5;
	background-image: none;
	border-color: #dfdfdf;
}

.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,
.show > .btn-light.dropdown-toggle:focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
}

.btn-dark {
	color: #fff;
	background: #222 -webkit-gradient(linear, left top, left bottom, from(#434343), to(#222)) repeat-x;
	background: #222 linear-gradient(180deg, #434343, #222) repeat-x;
	border-color: #222;
}

.btn-dark:hover {
	color: #fff;
	background: #0f0f0f -webkit-gradient(linear, left top, left bottom, from(#333333), to(#0f0f0f)) repeat-x;
	background: #0f0f0f linear-gradient(180deg, #333333, #0f0f0f) repeat-x;
	border-color: #090808;
}

.btn-dark:focus, .btn-dark.focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(34, 34, 34, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(34, 34, 34, 0.5);
}

.btn-dark.disabled, .btn-dark:disabled {
	color: #fff;
	background-color: #222;
	border-color: #222;
}

.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,
.show > .btn-dark.dropdown-toggle {
	color: #fff;
	background-color: #090808;
	background-image: none;
	border-color: #020202;
}

.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,
.show > .btn-dark.dropdown-toggle:focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(34, 34, 34, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(34, 34, 34, 0.5);
}

.btn-outline-primary {
	color: #2196F3;
	background-color: transparent;
	background-image: none;
	border-color: #2196F3;
}

.btn-outline-primary:hover {
	color: #fff;
	background-color: #2196F3;
	border-color: #2196F3;
}

.btn-outline-primary:focus, .btn-outline-primary.focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.5);
}

.btn-outline-primary.disabled, .btn-outline-primary:disabled {
	color: #2196F3;
	background-color: transparent;
}

.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,
.show > .btn-outline-primary.dropdown-toggle {
	color: #fff;
	background-color: #2196F3;
	border-color: #2196F3;
}

.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-primary.dropdown-toggle:focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.5);
}

.btn-outline-secondary {
	color: #fff;
	background-color: transparent;
	background-image: none;
	border-color: #fff;
}

.btn-outline-secondary:hover {
	color: #212121;
	background-color: #fff;
	border-color: #fff;
}

.btn-outline-secondary:focus, .btn-outline-secondary.focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
}

.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {
	color: #fff;
	background-color: transparent;
}

.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,
.show > .btn-outline-secondary.dropdown-toggle {
	color: #212121;
	background-color: #fff;
	border-color: #fff;
}

.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-secondary.dropdown-toggle:focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
}

.btn-outline-success {
	color: #4CAF50;
	background-color: transparent;
	background-image: none;
	border-color: #4CAF50;
}

.btn-outline-success:hover {
	color: #fff;
	background-color: #4CAF50;
	border-color: #4CAF50;
}

.btn-outline-success:focus, .btn-outline-success.focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
}

.btn-outline-success.disabled, .btn-outline-success:disabled {
	color: #4CAF50;
	background-color: transparent;
}

.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,
.show > .btn-outline-success.dropdown-toggle {
	color: #fff;
	background-color: #4CAF50;
	border-color: #4CAF50;
}

.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-success.dropdown-toggle:focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
}

.btn-outline-info {
	color: #9C27B0;
	background-color: transparent;
	background-image: none;
	border-color: #9C27B0;
}

.btn-outline-info:hover {
	color: #fff;
	background-color: #9C27B0;
	border-color: #9C27B0;
}

.btn-outline-info:focus, .btn-outline-info.focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(156, 39, 176, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(156, 39, 176, 0.5);
}

.btn-outline-info.disabled, .btn-outline-info:disabled {
	color: #9C27B0;
	background-color: transparent;
}

.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,
.show > .btn-outline-info.dropdown-toggle {
	color: #fff;
	background-color: #9C27B0;
	border-color: #9C27B0;
}

.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-info.dropdown-toggle:focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(156, 39, 176, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(156, 39, 176, 0.5);
}

.btn-outline-warning {
	color: #ff9800;
	background-color: transparent;
	background-image: none;
	border-color: #ff9800;
}

.btn-outline-warning:hover {
	color: #fff;
	background-color: #ff9800;
	border-color: #ff9800;
}

.btn-outline-warning:focus, .btn-outline-warning.focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(255, 152, 0, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(255, 152, 0, 0.5);
}

.btn-outline-warning.disabled, .btn-outline-warning:disabled {
	color: #ff9800;
	background-color: transparent;
}

.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,
.show > .btn-outline-warning.dropdown-toggle {
	color: #fff;
	background-color: #ff9800;
	border-color: #ff9800;
}

.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-warning.dropdown-toggle:focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(255, 152, 0, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(255, 152, 0, 0.5);
}

.btn-outline-danger {
	color: #e51c23;
	background-color: transparent;
	background-image: none;
	border-color: #e51c23;
}

.btn-outline-danger:hover {
	color: #fff;
	background-color: #e51c23;
	border-color: #e51c23;
}

.btn-outline-danger:focus, .btn-outline-danger.focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(229, 28, 35, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(229, 28, 35, 0.5);
}

.btn-outline-danger.disabled, .btn-outline-danger:disabled {
	color: #e51c23;
	background-color: transparent;
}

.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,
.show > .btn-outline-danger.dropdown-toggle {
	color: #fff;
	background-color: #e51c23;
	border-color: #e51c23;
}

.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-danger.dropdown-toggle:focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(229, 28, 35, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(229, 28, 35, 0.5);
}

.btn-outline-light {
	color: #fff;
	background-color: transparent;
	background-image: none;
	border-color: #fff;
}

.btn-outline-light:hover {
	color: #212121;
	background-color: #fff;
	border-color: #fff;
}

.btn-outline-light:focus, .btn-outline-light.focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
}

.btn-outline-light.disabled, .btn-outline-light:disabled {
	color: #fff;
	background-color: transparent;
}

.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,
.show > .btn-outline-light.dropdown-toggle {
	color: #212121;
	background-color: #fff;
	border-color: #fff;
}

.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-light.dropdown-toggle:focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
}

.btn-outline-dark {
	color: #222;
	background-color: transparent;
	background-image: none;
	border-color: #222;
}

.btn-outline-dark:hover {
	color: #fff;
	background-color: #222;
	border-color: #222;
}

.btn-outline-dark:focus, .btn-outline-dark.focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(34, 34, 34, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(34, 34, 34, 0.5);
}

.btn-outline-dark.disabled, .btn-outline-dark:disabled {
	color: #222;
	background-color: transparent;
}

.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,
.show > .btn-outline-dark.dropdown-toggle {
	color: #fff;
	background-color: #222;
	border-color: #222;
}

.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-dark.dropdown-toggle:focus {
	-webkit-box-shadow: 0 0 0 0.2rem rgba(34, 34, 34, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(34, 34, 34, 0.5);
}

.btn-link {
	font-weight: 400;
	color: #2196F3;
	background-color: transparent;
}

.btn-link:hover {
	color: #0a6ebd;
	text-decoration: underline;
	background-color: transparent;
	border-color: transparent;
}

.btn-link:focus, .btn-link.focus {
	text-decoration: underline;
	border-color: transparent;
	-webkit-box-shadow: none;
	box-shadow: none;
}

.btn-link:disabled, .btn-link.disabled {
	color: #666;
	pointer-events: none;
}

.btn-lg, .btn-group-lg > .btn {
	padding: 0.5rem 1rem;
	font-size: 1.015625rem;
	line-height: 1.5;
	border-radius: 0.3rem;
}

.btn-sm, .btn-group-sm > .btn {
	padding: 0.25rem 0.5rem;
	font-size: 0.7109375rem;
	line-height: 1.5;
	border-radius: 0.2rem;
}

.btn-block {
	display: block;
	width: 100%;
}

.btn-block + .btn-block {
	margin-top: 0.5rem;
}

input[type="submit"].btn-block,
input[type="reset"].btn-block,
input[type="button"].btn-block {
	width: 100%;
}

.fade {
	-webkit-transition: opacity 0.15s linear;
	transition: opacity 0.15s linear;
}

@media screen and (prefers-reduced-motion: reduce) {
	.fade {
	-webkit-transition: none;
	transition: none;
	}
}

.fade:not(.show) {
	opacity: 0;
}

.collapse:not(.show) {
	display: none;
}

.collapsing {
	position: relative;
	height: 0;
	overflow: hidden;
	-webkit-transition: height 0.35s ease;
	transition: height 0.35s ease;
}

@media screen and (prefers-reduced-motion: reduce) {
	.collapsing {
	-webkit-transition: none;
	transition: none;
	}
}

.dropup,
.dropright,
.dropdown,
.dropleft {
	position: relative;
}

.dropdown-toggle::after {
	display: inline-block;
	width: 0;
	height: 0;
	margin-left: 0.255em;
	vertical-align: 0.255em;
	content: "";
	border-top: 0.3em solid;
	border-right: 0.3em solid transparent;
	border-bottom: 0;
	border-left: 0.3em solid transparent;
}

.dropdown-toggle:empty::after {
	margin-left: 0;
}

.dropdown-menu {
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 1000;
	display: none;
	float: left;
	min-width: 10rem;
	padding: 0.5rem 0;
	margin: 0.125rem 0 0;
	font-size: 0.8125rem;
	color: #444;
	text-align: left;
	list-style: none;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid rgba(0, 0, 0, 0.15);
	border-radius: 0.25rem;
}

.dropdown-menu-right {
	right: 0;
	left: auto;
}

.dropup .dropdown-menu {
	top: auto;
	bottom: 100%;
	margin-top: 0;
	margin-bottom: 0.125rem;
}

.dropup .dropdown-toggle::after {
	display: inline-block;
	width: 0;
	height: 0;
	margin-left: 0.255em;
	vertical-align: 0.255em;
	content: "";
	border-top: 0;
	border-right: 0.3em solid transparent;
	border-bottom: 0.3em solid;
	border-left: 0.3em solid transparent;
}

.dropup .dropdown-toggle:empty::after {
	margin-left: 0;
}

.dropright .dropdown-menu {
	top: 0;
	right: auto;
	left: 100%;
	margin-top: 0;
	margin-left: 0.125rem;
}

.dropright .dropdown-toggle::after {
	display: inline-block;
	width: 0;
	height: 0;
	margin-left: 0.255em;
	vertical-align: 0.255em;
	content: "";
	border-top: 0.3em solid transparent;
	border-right: 0;
	border-bottom: 0.3em solid transparent;
	border-left: 0.3em solid;
}

.dropright .dropdown-toggle:empty::after {
	margin-left: 0;
}

.dropright .dropdown-toggle::after {
	vertical-align: 0;
}

.dropleft .dropdown-menu {
	top: 0;
	right: 100%;
	left: auto;
	margin-top: 0;
	margin-right: 0.125rem;
}

.dropleft .dropdown-toggle::after {
	display: inline-block;
	width: 0;
	height: 0;
	margin-left: 0.255em;
	vertical-align: 0.255em;
	content: "";
}

.dropleft .dropdown-toggle::after {
	display: none;
}

.dropleft .dropdown-toggle::before {
	display: inline-block;
	width: 0;
	height: 0;
	margin-right: 0.255em;
	vertical-align: 0.255em;
	content: "";
	border-top: 0.3em solid transparent;
	border-right: 0.3em solid;
	border-bottom: 0.3em solid transparent;
}

.dropleft .dropdown-toggle:empty::after {
	margin-left: 0;
}

.dropleft .dropdown-toggle::before {
	vertical-align: 0;
}

.dropdown-menu[x-placement^="top"], .dropdown-menu[x-placement^="right"], .dropdown-menu[x-placement^="bottom"], .dropdown-menu[x-placement^="left"] {
	right: auto;
	bottom: auto;
}

.dropdown-divider {
	height: 0;
	margin: 0.5rem 0;
	overflow: hidden;
	border-top: 1px solid #eee;
}

.dropdown-item {
	display: block;
	width: 100%;
	padding: 0.25rem 1.5rem;
	clear: both;
	font-weight: 400;
	color: #212121;
	text-align: inherit;
	white-space: nowrap;
	background-color: transparent;
	border: 0;
}

.dropdown-item:hover, .dropdown-item:focus {
	color: #141414;
	text-decoration: none;
	background: #f8f9fa -webkit-gradient(linear, left top, left bottom, from(#f9fafb), to(#f8f9fa)) repeat-x;
	background: #f8f9fa linear-gradient(180deg, #f9fafb, #f8f9fa) repeat-x;
}

.dropdown-item.active, .dropdown-item:active {
	color: #fff;
	text-decoration: none;
	background: #2196F3 -webkit-gradient(linear, left top, left bottom, from(#42a6f5), to(#2196F3)) repeat-x;
	background: #2196F3 linear-gradient(180deg, #42a6f5, #2196F3) repeat-x;
}

.dropdown-item.disabled, .dropdown-item:disabled {
	color: #666;
	background-color: transparent;
	background-image: none;
}

.dropdown-menu.show {
	display: block;
}

.dropdown-header {
	display: block;
	padding: 0.5rem 1.5rem;
	margin-bottom: 0;
	font-size: 0.7109375rem;
	color: #666;
	white-space: nowrap;
}

.dropdown-item-text {
	display: block;
	padding: 0.25rem 1.5rem;
	color: #212121;
}

.btn-group,
.btn-group-vertical {
	position: relative;
	display: -webkit-inline-box;
	display: -ms-inline-flexbox;
	display: inline-flex;
	vertical-align: middle;
}

.btn-group > .btn,
.btn-group-vertical > .btn {
	position: relative;
	-webkit-box-flex: 0;
	-ms-flex: 0 1 auto;
	flex: 0 1 auto;
}

.btn-group > .btn:hover,
.btn-group-vertical > .btn:hover {
	z-index: 1;
}

.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn.active {
	z-index: 1;
}

.btn-group .btn + .btn,
.btn-group .btn + .btn-group,
.btn-group .btn-group + .btn,
.btn-group .btn-group + .btn-group,
.btn-group-vertical .btn + .btn,
.btn-group-vertical .btn + .btn-group,
.btn-group-vertical .btn-group + .btn,
.btn-group-vertical .btn-group + .btn-group {
	margin-left: -1px;
}

.btn-toolbar {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	justify-content: flex-start;
}

.btn-toolbar .input-group {
	width: auto;
}

.btn-group > .btn:first-child {
	margin-left: 0;
}

.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group > .btn-group:not(:last-child) > .btn {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}

.btn-group > .btn:not(:first-child),
.btn-group > .btn-group:not(:first-child) > .btn {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}

.dropdown-toggle-split {
	padding-right: 0.75rem;
	padding-left: 0.75rem;
}

.dropdown-toggle-split::after,
.dropup .dropdown-toggle-split::after,
.dropright .dropdown-toggle-split::after {
	margin-left: 0;
}

.dropleft .dropdown-toggle-split::before {
	margin-right: 0;
}

.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {
	padding-right: 0.375rem;
	padding-left: 0.375rem;
}

.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {
	padding-right: 0.75rem;
	padding-left: 0.75rem;
}

.btn-group-vertical {
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-align: start;
	-ms-flex-align: start;
	align-items: flex-start;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
}

.btn-group-vertical .btn,
.btn-group-vertical .btn-group {
	width: 100%;
}

.btn-group-vertical > .btn + .btn,
.btn-group-vertical > .btn + .btn-group,
.btn-group-vertical > .btn-group + .btn,
.btn-group-vertical > .btn-group + .btn-group {
	margin-top: -1px;
	margin-left: 0;
}

.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group-vertical > .btn-group:not(:last-child) > .btn {
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
}

.btn-group-vertical > .btn:not(:first-child),
.btn-group-vertical > .btn-group:not(:first-child) > .btn {
	border-top-left-radius: 0;
	border-top-right-radius: 0;
}

.btn-group-toggle > .btn,
.btn-group-toggle > .btn-group > .btn {
	margin-bottom: 0;
}

.btn-group-toggle > .btn input[type="radio"],
.btn-group-toggle > .btn input[type="checkbox"],
.btn-group-toggle > .btn-group > .btn input[type="radio"],
.btn-group-toggle > .btn-group > .btn input[type="checkbox"] {
	position: absolute;
	clip: rect(0, 0, 0, 0);
	pointer-events: none;
}

.input-group {
	position: relative;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-box-align: stretch;
	-ms-flex-align: stretch;
	align-items: stretch;
	width: 100%;
}

.input-group > .form-control,
.input-group > .custom-select,
.input-group > .custom-file {
	position: relative;
	-webkit-box-flex: 1;
	-ms-flex: 1 1 auto;
	flex: 1 1 auto;
	width: 1%;
	margin-bottom: 0;
}

.input-group > .form-control + .form-control,
.input-group > .form-control + .custom-select,
.input-group > .form-control + .custom-file,
.input-group > .custom-select + .form-control,
.input-group > .custom-select + .custom-select,
.input-group > .custom-select + .custom-file,
.input-group > .custom-file + .form-control,
.input-group > .custom-file + .custom-select,
.input-group > .custom-file + .custom-file {
	margin-left: 0rem;
}

.input-group > .form-control:focus,
.input-group > .custom-select:focus,
.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {
	z-index: 3;
}

.input-group > .custom-file .custom-file-input:focus {
	z-index: 4;
}

.input-group > .form-control:not(:last-child),
.input-group > .custom-select:not(:last-child) {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}

.input-group > .form-control:not(:first-child),
.input-group > .custom-select:not(:first-child) {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}

.input-group > .custom-file {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
}

.input-group > .custom-file:not(:last-child) .custom-file-label,
.input-group > .custom-file:not(:last-child) .custom-file-label::after {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}

.input-group > .custom-file:not(:first-child) .custom-file-label {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}

.input-group-prepend,
.input-group-append {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
}

.input-group-prepend .btn,
.input-group-append .btn {
	position: relative;
	z-index: 2;
}

.input-group-prepend .btn + .btn,
.input-group-prepend .btn + .input-group-text,
.input-group-prepend .input-group-text + .input-group-text,
.input-group-prepend .input-group-text + .btn,
.input-group-append .btn + .btn,
.input-group-append .btn + .input-group-text,
.input-group-append .input-group-text + .input-group-text,
.input-group-append .input-group-text + .btn {
	margin-left: 0rem;
}

.input-group-prepend {
	margin-right: 0rem;
}

.input-group-append {
	margin-left: 0rem;
}

.input-group-text {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	padding: 1rem 0;
	margin-bottom: 0;
	font-size: 0.8125rem;
	font-weight: 400;
	line-height: 1.5;
	color: #666;
	text-align: center;
	white-space: nowrap;
	background-color: transparent;
	border: 0rem solid transparent;
	border-radius: 0;
}

.input-group-text input[type="radio"],
.input-group-text input[type="checkbox"] {
	margin-top: 0;
}

.input-group-lg > .form-control,
.input-group-lg > .input-group-prepend > .input-group-text,
.input-group-lg > .input-group-append > .input-group-text,
.input-group-lg > .input-group-prepend > .btn,
.input-group-lg > .input-group-append > .btn {
	height: calc(2.5234375rem + 0rem);
	padding: 1.015625rem 0;
	font-size: 1.015625rem;
	line-height: 1.5;
	border-radius: 0;
}

.input-group-sm > .form-control,
.input-group-sm > .input-group-prepend > .input-group-text,
.input-group-sm > .input-group-append > .input-group-text,
.input-group-sm > .input-group-prepend > .btn,
.input-group-sm > .input-group-append > .btn {
	height: calc(1.56640625rem + 0rem);
	padding: 0.8125rem 0;
	font-size: 0.7109375rem;
	line-height: 1.5;
	border-radius: 0;
}

.input-group > .input-group-prepend > .btn,
.input-group > .input-group-prepend > .input-group-text,
.input-group > .input-group-append:not(:last-child) > .btn,
.input-group > .input-group-append:not(:last-child) > .input-group-text,
.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),
.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}

.input-group > .input-group-append > .btn,
.input-group > .input-group-append > .input-group-text,
.input-group > .input-group-prepend:not(:first-child) > .btn,
.input-group > .input-group-prepend:not(:first-child) > .input-group-text,
.input-group > .input-group-prepend:first-child > .btn:not(:first-child),
.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}

.custom-control {
	position: relative;
	display: block;
	min-height: 1.21875rem;
	padding-left: 1.75rem;
}

.custom-control-inline {
	display: -webkit-inline-box;
	display: -ms-inline-flexbox;
	display: inline-flex;
	margin-right: 1rem;
}

.custom-control-input {
	position: absolute;
	z-index: -1;
	opacity: 0;
}

.custom-control-input:checked ~ .custom-control-label::before {
	color: #fff;
	background: #2196F3 -webkit-gradient(linear, left top, left bottom, from(#42a6f5), to(#2196F3)) repeat-x;
	background: #2196F3 linear-gradient(180deg, #42a6f5, #2196F3) repeat-x;
}

.custom-control-input:focus ~ .custom-control-label::before {
	-webkit-box-shadow: 0;
	box-shadow: 0;
}

.custom-control-input:active ~ .custom-control-label::before {
	color: #fff;
	background-color: #cae6fc;
}

.custom-control-input:disabled ~ .custom-control-label {
	color: #666;
}

.custom-control-input:disabled ~ .custom-control-label::before {
	background-color: #f8f9fa;
}

.custom-control-label {
	position: relative;
	margin-bottom: 0;
}

.custom-control-label::before {
	position: absolute;
	top: -0.015625rem;
	left: -1.75rem;
	display: block;
	width: 1.25rem;
	height: 1.25rem;
	pointer-events: none;
	content: "";
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-color: #fff;
}

.custom-control-label::after {
	position: absolute;
	top: -0.015625rem;
	left: -1.75rem;
	display: block;
	width: 1.25rem;
	height: 1.25rem;
	content: "";
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 50% 50%;
}

.custom-checkbox .custom-control-label::before {
	border-radius: 2px;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
	background: #2196F3 -webkit-gradient(linear, left top, left bottom, from(#42a6f5), to(#2196F3)) repeat-x;
	background: #2196F3 linear-gradient(180deg, #42a6f5, #2196F3) repeat-x;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
	background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
}

.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {
	background: #2196F3 -webkit-gradient(linear, left top, left bottom, from(#42a6f5), to(#2196F3)) repeat-x;
	background: #2196F3 linear-gradient(180deg, #42a6f5, #2196F3) repeat-x;
}

.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {
	background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E");
}

.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {
	background-color: rgba(33, 150, 243, 0.5);
}

.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {
	background-color: rgba(33, 150, 243, 0.5);
}

.custom-radio .custom-control-label::before {
	border-radius: 50%;
}

.custom-radio .custom-control-input:checked ~ .custom-control-label::before {
	background: #2196F3 -webkit-gradient(linear, left top, left bottom, from(#42a6f5), to(#2196F3)) repeat-x;
	background: #2196F3 linear-gradient(180deg, #42a6f5, #2196F3) repeat-x;
}

.custom-radio .custom-control-input:checked ~ .custom-control-label::after {
	background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='4' fill='%232196F3'/%3E%3C/svg%3E");
}

.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {
	background-color: rgba(33, 150, 243, 0.5);
}

.custom-select {
	display: inline-block;
	width: 100%;
	height: calc(2.81875rem + 0rem);
	padding: 0.375rem 1.75rem 0.375rem 0.75rem;
	line-height: 1.5;
	color: #666;
	vertical-align: middle;
	background: transparent url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23222' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right 0.75rem center;
	background-size: 8px 10px;
	border: 1px solid transparent;
	border-radius: 0.25rem;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}

.custom-select:focus {
	border-color: #9acffa;
	outline: 0;
	-webkit-box-shadow: 0 0 0 0.2rem rgba(154, 207, 250, 0.5);
	box-shadow: 0 0 0 0.2rem rgba(154, 207, 250, 0.5);
}

.custom-select:focus::-ms-value {
	color: #666;
	background-color: transparent;
}

.custom-select[multiple], .custom-select[size]:not([size="1"]) {
	height: auto;
	padding-right: 0.75rem;
	background-image: none;
}

.custom-select:disabled {
	color: #666;
	background-color: #eee;
}

.custom-select::-ms-expand {
	opacity: 0;
}

.custom-select-sm {
	height: calc(1.56640625rem + 0rem);
	padding-top: 0.375rem;
	padding-bottom: 0.375rem;
	font-size: 75%;
}

.custom-select-lg {
	height: calc(2.5234375rem + 0rem);
	padding-top: 0.375rem;
	padding-bottom: 0.375rem;
	font-size: 125%;
}

.custom-file {
	position: relative;
	display: inline-block;
	width: 100%;
	height: calc(2.81875rem + 0rem);
	margin-bottom: 0;
}

.custom-file-input {
	position: relative;
	z-index: 2;
	width: 100%;
	height: calc(2.81875rem + 0rem);
	margin: 0;
	opacity: 0;
}

.custom-file-input:focus ~ .custom-file-label {
	border-color: #9acffa;
	-webkit-box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
	box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
}

.custom-file-input:focus ~ .custom-file-label::after {
	border-color: #9acffa;
}

.custom-file-input:disabled ~ .custom-file-label {
	background-color: transparent;
}

.custom-file-input:lang(en) ~ .custom-file-label::after {
	content: "Browse";
}

.custom-file-label {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	z-index: 1;
	height: calc(2.81875rem + 0rem);
	padding: 0.8rem 1rem;
	line-height: 1.5;
	color: #666;
	background-color: transparent;
	border: 1px solid transparent;
	border-radius: 0;
}

.custom-file-label::after {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 3;
	display: block;
	height: 2.81875rem;
	padding: 0.8rem 1rem;
	line-height: 1.5;
	color: #666;
	content: "Browse";
	background: transparent -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.15)), to(transparent)) repeat-x;
	background: transparent linear-gradient(180deg, rgba(255, 255, 255, 0.15), transparent) repeat-x;
	border-left: 1px solid transparent;
	border-radius: 0 0 0 0;
}

.custom-range {
	width: 100%;
	padding-left: 0;
	background-color: transparent;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}

.custom-range:focus {
	outline: none;
}

.custom-range:focus::-webkit-slider-thumb {
	-webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
	box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
}

.custom-range:focus::-moz-range-thumb {
	box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
}

.custom-range:focus::-ms-thumb {
	box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
}

.custom-range::-moz-focus-outer {
	border: 0;
}

.custom-range::-webkit-slider-thumb {
	width: 1rem;
	height: 1rem;
	margin-top: -0.25rem;
	background: #2196F3 -webkit-gradient(linear, left top, left bottom, from(#42a6f5), to(#2196F3)) repeat-x;
	background: #2196F3 linear-gradient(180deg, #42a6f5, #2196F3) repeat-x;
	border: 0;
	border-radius: 1rem;
	-webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
	transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
	transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
	-webkit-appearance: none;
	appearance: none;
}

@media screen and (prefers-reduced-motion: reduce) {
	.custom-range::-webkit-slider-thumb {
	-webkit-transition: none;
	transition: none;
	}
}

.custom-range::-webkit-slider-thumb:active {
	background: #cae6fc -webkit-gradient(linear, left top, left bottom, from(#d2eafd), to(#cae6fc)) repeat-x;
	background: #cae6fc linear-gradient(180deg, #d2eafd, #cae6fc) repeat-x;
}

.custom-range::-webkit-slider-runnable-track {
	width: 100%;
	height: 0.5rem;
	color: transparent;
	cursor: pointer;
	background-color: #dee2e6;
	border-color: transparent;
	border-radius: 1rem;
}

.custom-range::-moz-range-thumb {
	width: 1rem;
	height: 1rem;
	background: #2196F3 linear-gradient(180deg, #42a6f5, #2196F3) repeat-x;
	border: 0;
	border-radius: 1rem;
	-webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
	transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
	transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
	-moz-appearance: none;
	appearance: none;
}

@media screen and (prefers-reduced-motion: reduce) {
	.custom-range::-moz-range-thumb {
	-webkit-transition: none;
	transition: none;
	}
}

.custom-range::-moz-range-thumb:active {
	background: #cae6fc linear-gradient(180deg, #d2eafd, #cae6fc) repeat-x;
}

.custom-range::-moz-range-track {
	width: 100%;
	height: 0.5rem;
	color: transparent;
	cursor: pointer;
	background-color: #dee2e6;
	border-color: transparent;
	border-radius: 1rem;
}

.custom-range::-ms-thumb {
	width: 1rem;
	height: 1rem;
	margin-top: 0;
	margin-right: 0.2rem;
	margin-left: 0.2rem;
	background: #2196F3 linear-gradient(180deg, #42a6f5, #2196F3) repeat-x;
	border: 0;
	border-radius: 1rem;
	-webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
	transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
	transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
	appearance: none;
}

@media screen and (prefers-reduced-motion: reduce) {
	.custom-range::-ms-thumb {
	-webkit-transition: none;
	transition: none;
	}
}

.custom-range::-ms-thumb:active {
	background: #cae6fc linear-gradient(180deg, #d2eafd, #cae6fc) repeat-x;
}

.custom-range::-ms-track {
	width: 100%;
	height: 0.5rem;
	color: transparent;
	cursor: pointer;
	background-color: transparent;
	border-color: transparent;
	border-width: 0.5rem;
}

.custom-range::-ms-fill-lower {
	background-color: #dee2e6;
	border-radius: 1rem;
}

.custom-range::-ms-fill-upper {
	margin-right: 15px;
	background-color: #dee2e6;
	border-radius: 1rem;
}

.custom-control-label::before,
.custom-file-label,
.custom-select {
	-webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
	transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
	transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}

@media screen and (prefers-reduced-motion: reduce) {
	.custom-control-label::before,
	.custom-file-label,
	.custom-select {
	-webkit-transition: none;
	transition: none;
	}
}

.nav {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	padding-left: 0;
	margin-bottom: 0;
	list-style: none;
}

.nav-link {
	display: block;
	padding: 0.5rem 1rem;
}

.nav-link:hover, .nav-link:focus {
	text-decoration: none;
}

.nav-link.disabled {
	color: #bbb;
}

.nav-tabs {
	border-bottom: 1px solid transparent;
}

.nav-tabs .nav-item {
	margin-bottom: -1px;
}

.nav-tabs .nav-link {
	border: 1px solid transparent;
	border-top-left-radius: 0.25rem;
	border-top-right-radius: 0.25rem;
}

.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
	border-color: #eee #eee transparent;
}

.nav-tabs .nav-link.disabled {
	color: #bbb;
	background-color: transparent;
	border-color: transparent;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
	color: #444;
	background-color: #fff;
	border-color: #dee2e6 #dee2e6 #fff;
}

.nav-tabs .dropdown-menu {
	margin-top: -1px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
}

.nav-pills .nav-link {
	border-radius: 0.25rem;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
	color: #fff;
	background-color: #2196F3;
}

.nav-fill .nav-item {
	-webkit-box-flex: 1;
	-ms-flex: 1 1 auto;
	flex: 1 1 auto;
	text-align: center;
}

.nav-justified .nav-item {
	-ms-flex-preferred-size: 0;
	flex-basis: 0;
	-webkit-box-flex: 1;
	-ms-flex-positive: 1;
	flex-grow: 1;
	text-align: center;
}

.tab-content > .tab-pane {
	display: none;
}

.tab-content > .active {
	display: block;
}

.navbar {
	position: relative;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	padding: 1rem 1rem;
}

.navbar > .container,
.navbar > .container-fluid {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
}

.navbar-brand {
	display: inline-block;
	padding-top: 0.34765625rem;
	padding-bottom: 0.34765625rem;
	margin-right: 1rem;
	font-size: 1.015625rem;
	line-height: inherit;
	white-space: nowrap;
}

.navbar-brand:hover, .navbar-brand:focus {
	text-decoration: none;
}

.navbar-nav {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	padding-left: 0;
	margin-bottom: 0;
	list-style: none;
}

.navbar-nav .nav-link {
	padding-right: 0;
	padding-left: 0;
}

.navbar-nav .dropdown-menu {
	position: static;
	float: none;
}

.navbar-text {
	display: inline-block;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
}

.navbar-collapse {
	-ms-flex-preferred-size: 100%;
	flex-basis: 100%;
	-webkit-box-flex: 1;
	-ms-flex-positive: 1;
	flex-grow: 1;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
}

.navbar-toggler {
	padding: 0.25rem 0.75rem;
	font-size: 1.015625rem;
	line-height: 1;
	background-color: transparent;
	border: 1px solid transparent;
	border-radius: 0.25rem;
}

.navbar-toggler:hover, .navbar-toggler:focus {
	text-decoration: none;
}

.navbar-toggler:not(:disabled):not(.disabled) {
	cursor: pointer;
}

.navbar-toggler-icon {
	display: inline-block;
	width: 1.5em;
	height: 1.5em;
	vertical-align: middle;
	content: "";
	background: no-repeat center center;
	background-size: 100% 100%;
}

@media (max-width: 575.98px) {
	.navbar-expand-sm > .container,
	.navbar-expand-sm > .container-fluid {
	padding-right: 0;
	padding-left: 0;
	}
}

@media (min-width: 576px) {
	.navbar-expand-sm {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-flow: row nowrap;
	flex-flow: row nowrap;
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	justify-content: flex-start;
	}
	.navbar-expand-sm .navbar-nav {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	}
	.navbar-expand-sm .navbar-nav .dropdown-menu {
	position: absolute;
	}
	.navbar-expand-sm .navbar-nav .nav-link {
	padding-right: 0.5rem;
	padding-left: 0.5rem;
	}
	.navbar-expand-sm > .container,
	.navbar-expand-sm > .container-fluid {
	-ms-flex-wrap: nowrap;
	flex-wrap: nowrap;
	}
	.navbar-expand-sm .navbar-collapse {
	display: -webkit-box !important;
	display: -ms-flexbox !important;
	display: flex !important;
	-ms-flex-preferred-size: auto;
	flex-basis: auto;
	}
	.navbar-expand-sm .navbar-toggler {
	display: none;
	}
}

@media (max-width: 767.98px) {
	.navbar-expand-md > .container,
	.navbar-expand-md > .container-fluid {
	padding-right: 0;
	padding-left: 0;
	}
}

@media (min-width: 768px) {
	.navbar-expand-md {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-flow: row nowrap;
	flex-flow: row nowrap;
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	justify-content: flex-start;
	}
	.navbar-expand-md .navbar-nav {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	}
	.navbar-expand-md .navbar-nav .dropdown-menu {
	position: absolute;
	}
	.navbar-expand-md .navbar-nav .nav-link {
	padding-right: 0.5rem;
	padding-left: 0.5rem;
	}
	.navbar-expand-md > .container,
	.navbar-expand-md > .container-fluid {
	-ms-flex-wrap: nowrap;
	flex-wrap: nowrap;
	}
	.navbar-expand-md .navbar-collapse {
	display: -webkit-box !important;
	display: -ms-flexbox !important;
	display: flex !important;
	-ms-flex-preferred-size: auto;
	flex-basis: auto;
	}
	.navbar-expand-md .navbar-toggler {
	display: none;
	}
}

@media (max-width: 991.98px) {
	.navbar-expand-lg > .container,
	.navbar-expand-lg > .container-fluid {
	padding-right: 0;
	padding-left: 0;
	}
}

@media (min-width: 992px) {
	.navbar-expand-lg {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-flow: row nowrap;
	flex-flow: row nowrap;
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	justify-content: flex-start;
	}
	.navbar-expand-lg .navbar-nav {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	}
	.navbar-expand-lg .navbar-nav .dropdown-menu {
	position: absolute;
	}
	.navbar-expand-lg .navbar-nav .nav-link {
	padding-right: 0.5rem;
	padding-left: 0.5rem;
	}
	.navbar-expand-lg > .container,
	.navbar-expand-lg > .container-fluid {
	-ms-flex-wrap: nowrap;
	flex-wrap: nowrap;
	}
	.navbar-expand-lg .navbar-collapse {
	display: -webkit-box !important;
	display: -ms-flexbox !important;
	display: flex !important;
	-ms-flex-preferred-size: auto;
	flex-basis: auto;
	}
	.navbar-expand-lg .navbar-toggler {
	display: none;
	}
}

@media (max-width: 1199.98px) {
	.navbar-expand-xl > .container,
	.navbar-expand-xl > .container-fluid {
	padding-right: 0;
	padding-left: 0;
	}
}

@media (min-width: 1200px) {
	.navbar-expand-xl {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-flow: row nowrap;
	flex-flow: row nowrap;
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	justify-content: flex-start;
	}
	.navbar-expand-xl .navbar-nav {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	}
	.navbar-expand-xl .navbar-nav .dropdown-menu {
	position: absolute;
	}
	.navbar-expand-xl .navbar-nav .nav-link {
	padding-right: 0.5rem;
	padding-left: 0.5rem;
	}
	.navbar-expand-xl > .container,
	.navbar-expand-xl > .container-fluid {
	-ms-flex-wrap: nowrap;
	flex-wrap: nowrap;
	}
	.navbar-expand-xl .navbar-collapse {
	display: -webkit-box !important;
	display: -ms-flexbox !important;
	display: flex !important;
	-ms-flex-preferred-size: auto;
	flex-basis: auto;
	}
	.navbar-expand-xl .navbar-toggler {
	display: none;
	}
}

.navbar-expand {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-flow: row nowrap;
	flex-flow: row nowrap;
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	justify-content: flex-start;
}

.navbar-expand > .container,
.navbar-expand > .container-fluid {
	padding-right: 0;
	padding-left: 0;
}

.navbar-expand .navbar-nav {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
}

.navbar-expand .navbar-nav .dropdown-menu {
	position: absolute;
}

.navbar-expand .navbar-nav .nav-link {
	padding-right: 0.5rem;
	padding-left: 0.5rem;
}

.navbar-expand > .container,
.navbar-expand > .container-fluid {
	-ms-flex-wrap: nowrap;
	flex-wrap: nowrap;
}

.navbar-expand .navbar-collapse {
	display: -webkit-box !important;
	display: -ms-flexbox !important;
	display: flex !important;
	-ms-flex-preferred-size: auto;
	flex-basis: auto;
}

.navbar-expand .navbar-toggler {
	display: none;
}

.navbar-light .navbar-brand {
	color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {
	color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-nav .nav-link {
	color: rgba(0, 0, 0, 0.5);
}

.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
	color: rgba(0, 0, 0, 0.7);
}

.navbar-light .navbar-nav .nav-link.disabled {
	color: rgba(0, 0, 0, 0.3);
}

.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .nav-link.active {
	color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-toggler {
	color: rgba(0, 0, 0, 0.5);
	border-color: rgba(0, 0, 0, 0.1);
}

.navbar-light .navbar-toggler-icon {
	background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.navbar-light .navbar-text {
	color: rgba(0, 0, 0, 0.5);
}

.navbar-light .navbar-text a {
	color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {
	color: rgba(0, 0, 0, 0.9);
}

.navbar-dark .navbar-brand {
	color: #fff;
}

.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {
	color: #fff;
}

.navbar-dark .navbar-nav .nav-link {
	color: rgba(255, 255, 255, 0.75);
}

.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
	color: #fff;
}

.navbar-dark .navbar-nav .nav-link.disabled {
	color: rgba(255, 255, 255, 0.25);
}

.navbar-dark .navbar-nav .show > .nav-link,
.navbar-dark .navbar-nav .active > .nav-link,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .nav-link.active {
	color: #fff;
}

.navbar-dark .navbar-toggler {
	color: rgba(255, 255, 255, 0.75);
	border-color: rgba(255, 255, 255, 0.1);
}

.navbar-dark .navbar-toggler-icon {
	background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.75)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.navbar-dark .navbar-text {
	color: rgba(255, 255, 255, 0.75);
}

.navbar-dark .navbar-text a {
	color: #fff;
}

.navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {
	color: #fff;
}

.card {
	position: relative;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	background-color: #fff;
	background-clip: border-box;
	border: 0 solid transparent;
	border-radius: 0.25rem;
}

.card > hr {
	margin-right: 0;
	margin-left: 0;
}

.card > .list-group:first-child .list-group-item:first-child {
	border-top-left-radius: 0.25rem;
	border-top-right-radius: 0.25rem;
}

.card > .list-group:last-child .list-group-item:last-child {
	border-bottom-right-radius: 0.25rem;
	border-bottom-left-radius: 0.25rem;
}

.card-body {
	-webkit-box-flex: 1;
	-ms-flex: 1 1 auto;
	flex: 1 1 auto;
	padding: 1.25rem;
}

.card-title {
	margin-bottom: 0.75rem;
}

.card-subtitle {
	margin-top: -0.375rem;
	margin-bottom: 0;
}

.card-text:last-child {
	margin-bottom: 0;
}

.card-link:hover {
	text-decoration: none;
}

.card-link + .card-link {
	margin-left: 1.25rem;
}

.card-header {
	padding: 0.75rem 1.25rem;
	margin-bottom: 0;
	background-color: rgba(0, 0, 0, 0.03);
	border-bottom: 0 solid transparent;
}

.card-header:first-child {
	border-radius: calc(0.25rem - 0) calc(0.25rem - 0) 0 0;
}

.card-header + .list-group .list-group-item:first-child {
	border-top: 0;
}

.card-footer {
	padding: 0.75rem 1.25rem;
	background-color: rgba(0, 0, 0, 0.03);
	border-top: 0 solid transparent;
}

.card-footer:last-child {
	border-radius: 0 0 calc(0.25rem - 0) calc(0.25rem - 0);
}

.card-header-tabs {
	margin-right: -0.625rem;
	margin-bottom: -0.75rem;
	margin-left: -0.625rem;
	border-bottom: 0;
}

.card-header-pills {
	margin-right: -0.625rem;
	margin-left: -0.625rem;
}

.card-img-overlay {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	padding: 1.25rem;
}

.card-img {
	width: 100%;
	border-radius: calc(0.25rem - 0);
}

.card-img-top {
	width: 100%;
	border-top-left-radius: calc(0.25rem - 0);
	border-top-right-radius: calc(0.25rem - 0);
}

.card-img-bottom {
	width: 100%;
	border-bottom-right-radius: calc(0.25rem - 0);
	border-bottom-left-radius: calc(0.25rem - 0);
}

.card-deck {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
}

.card-deck .card {
	margin-bottom: 15px;
}

@media (min-width: 576px) {
	.card-deck {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-flow: row wrap;
	flex-flow: row wrap;
	margin-right: -15px;
	margin-left: -15px;
	}
	.card-deck .card {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-flex: 1;
	-ms-flex: 1 0 0%;
	flex: 1 0 0%;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	margin-right: 15px;
	margin-bottom: 0;
	margin-left: 15px;
	}
}

.card-group {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
}

.card-group > .card {
	margin-bottom: 15px;
}

@media (min-width: 576px) {
	.card-group {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-flow: row wrap;
	flex-flow: row wrap;
	}
	.card-group > .card {
	-webkit-box-flex: 1;
	-ms-flex: 1 0 0%;
	flex: 1 0 0%;
	margin-bottom: 0;
	}
	.card-group > .card + .card {
	margin-left: 0;
	border-left: 0;
	}
	.card-group > .card:first-child {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	}
	.card-group > .card:first-child .card-img-top,
	.card-group > .card:first-child .card-header {
	border-top-right-radius: 0;
	}
	.card-group > .card:first-child .card-img-bottom,
	.card-group > .card:first-child .card-footer {
	border-bottom-right-radius: 0;
	}
	.card-group > .card:last-child {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	}
	.card-group > .card:last-child .card-img-top,
	.card-group > .card:last-child .card-header {
	border-top-left-radius: 0;
	}
	.card-group > .card:last-child .card-img-bottom,
	.card-group > .card:last-child .card-footer {
	border-bottom-left-radius: 0;
	}
	.card-group > .card:only-child {
	border-radius: 0.25rem;
	}
	.card-group > .card:only-child .card-img-top,
	.card-group > .card:only-child .card-header {
	border-top-left-radius: 0.25rem;
	border-top-right-radius: 0.25rem;
	}
	.card-group > .card:only-child .card-img-bottom,
	.card-group > .card:only-child .card-footer {
	border-bottom-right-radius: 0.25rem;
	border-bottom-left-radius: 0.25rem;
	}
	.card-group > .card:not(:first-child):not(:last-child):not(:only-child) {
	border-radius: 0;
	}
	.card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top,
	.card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,
	.card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-header,
	.card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-footer {
	border-radius: 0;
	}
}

.card-columns .card {
	margin-bottom: 0.75rem;
}

@media (min-width: 576px) {
	.card-columns {
	-webkit-column-count: 3;
	column-count: 3;
	-webkit-column-gap: 1.25rem;
	column-gap: 1.25rem;
	orphans: 1;
	widows: 1;
	}
	.card-columns .card {
	display: inline-block;
	width: 100%;
	}
}

.accordion .card:not(:first-of-type):not(:last-of-type) {
	border-bottom: 0;
	border-radius: 0;
}

.accordion .card:not(:first-of-type) .card-header:first-child {
	border-radius: 0;
}

.accordion .card:first-of-type {
	border-bottom: 0;
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
}

.accordion .card:last-of-type {
	border-top-left-radius: 0;
	border-top-right-radius: 0;
}

.breadcrumb {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	padding: 0.75rem 1rem;
	margin-bottom: 1rem;
	list-style: none;
	background-color: #eee;
	border-radius: 0.25rem;
}

.breadcrumb-item + .breadcrumb-item {
	padding-left: 0.5rem;
}

.breadcrumb-item + .breadcrumb-item::before {
	display: inline-block;
	padding-right: 0.5rem;
	color: #666;
	content: "/";
}

.breadcrumb-item + .breadcrumb-item:hover::before {
	text-decoration: underline;
}

.breadcrumb-item + .breadcrumb-item:hover::before {
	text-decoration: none;
}

.breadcrumb-item.active {
	color: #666;
}

.pagination {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	padding-left: 0;
	list-style: none;
	border-radius: 0.25rem;
}

.page-link {
	position: relative;
	display: block;
	padding: 0.5rem 0.75rem;
	margin-left: -1px;
	line-height: 1.25;
	color: #2196F3;
	background-color: #fff;
	border: 1px solid #dee2e6;
}

.page-link:hover {
	z-index: 2;
	color: #0a6ebd;
	text-decoration: none;
	background-color: #eee;
	border-color: #dee2e6;
}

.page-link:focus {
	z-index: 2;
	outline: 0;
	-webkit-box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
	box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
}

.page-link:not(:disabled):not(.disabled) {
	cursor: pointer;
}

.page-item:first-child .page-link {
	margin-left: 0;
	border-top-left-radius: 0.25rem;
	border-bottom-left-radius: 0.25rem;
}

.page-item:last-child .page-link {
	border-top-right-radius: 0.25rem;
	border-bottom-right-radius: 0.25rem;
}

.page-item.active .page-link {
	z-index: 1;
	color: #fff;
	background-color: #2196F3;
	border-color: #2196F3;
}

.page-item.disabled .page-link {
	color: #666;
	pointer-events: none;
	cursor: auto;
	background-color: #fff;
	border-color: #dee2e6;
}

.pagination-lg .page-link {
	padding: 0.75rem 1.5rem;
	font-size: 1.015625rem;
	line-height: 1.5;
}

.pagination-lg .page-item:first-child .page-link {
	border-top-left-radius: 0.3rem;
	border-bottom-left-radius: 0.3rem;
}

.pagination-lg .page-item:last-child .page-link {
	border-top-right-radius: 0.3rem;
	border-bottom-right-radius: 0.3rem;
}

.pagination-sm .page-link {
	padding: 0.25rem 0.5rem;
	font-size: 0.7109375rem;
	line-height: 1.5;
}

.pagination-sm .page-item:first-child .page-link {
	border-top-left-radius: 0.2rem;
	border-bottom-left-radius: 0.2rem;
}

.pagination-sm .page-item:last-child .page-link {
	border-top-right-radius: 0.2rem;
	border-bottom-right-radius: 0.2rem;
}

.badge {
	display: inline-block;
	padding: 0.25em 0.4em;
	font-size: 75%;
	font-weight: 700;
	line-height: 1;
	text-align: center;
	white-space: nowrap;
	vertical-align: baseline;
	border-radius: 0.25rem;
}

.badge:empty {
	display: none;
}

.btn .badge {
	position: relative;
	top: -1px;
}

.badge-pill {
	padding-right: 0.6em;
	padding-left: 0.6em;
	border-radius: 10rem;
}

.badge-primary {
	color: #fff;
	background-color: #2196F3;
}

.badge-primary[href]:hover, .badge-primary[href]:focus {
	color: #fff;
	text-decoration: none;
	background-color: #0c7cd5;
}

.badge-secondary {
	color: #212121;
	background-color: #fff;
}

.badge-secondary[href]:hover, .badge-secondary[href]:focus {
	color: #212121;
	text-decoration: none;
	background-color: #e6e5e5;
}

.badge-success {
	color: #fff;
	background-color: #4CAF50;
}

.badge-success[href]:hover, .badge-success[href]:focus {
	color: #fff;
	text-decoration: none;
	background-color: #3d8b40;
}

.badge-info {
	color: #fff;
	background-color: #9C27B0;
}

.badge-info[href]:hover, .badge-info[href]:focus {
	color: #fff;
	text-decoration: none;
	background-color: #771e86;
}

.badge-warning {
	color: #fff;
	background-color: #ff9800;
}

.badge-warning[href]:hover, .badge-warning[href]:focus {
	color: #fff;
	text-decoration: none;
	background-color: #cc7a00;
}

.badge-danger {
	color: #fff;
	background-color: #e51c23;
}

.badge-danger[href]:hover, .badge-danger[href]:focus {
	color: #fff;
	text-decoration: none;
	background-color: #b9151b;
}

.badge-light {
	color: #212121;
	background-color: #fff;
}

.badge-light[href]:hover, .badge-light[href]:focus {
	color: #212121;
	text-decoration: none;
	background-color: #e6e5e5;
}

.badge-dark {
	color: #fff;
	background-color: #222;
}

.badge-dark[href]:hover, .badge-dark[href]:focus {
	color: #fff;
	text-decoration: none;
	background-color: #090808;
}

.jumbotron {
	padding: 2rem 1rem;
	margin-bottom: 2rem;
	background-color: #eee;
	border-radius: 0.3rem;
}

@media (min-width: 576px) {
	.jumbotron {
	padding: 4rem 2rem;
	}
}

.jumbotron-fluid {
	padding-right: 0;
	padding-left: 0;
	border-radius: 0;
}

.alert {
	position: relative;
	padding: 0.75rem 1.25rem;
	margin-bottom: 1rem;
	border: 1px solid transparent;
	border-radius: 0.25rem;
}

.alert-heading {
	color: inherit;
}

.alert-link {
	font-weight: 700;
}

.alert-dismissible {
	padding-right: 4.625rem;
}

.alert-dismissible .close {
	position: absolute;
	top: 0;
	right: 0;
	padding: 0.75rem 1.25rem;
	color: inherit;
}

.alert-primary {
	color: #114e7e;
	background: #d3eafd -webkit-gradient(linear, left top, left bottom, from(#daedfd), to(#d3eafd)) repeat-x;
	background: #d3eafd linear-gradient(180deg, #daedfd, #d3eafd) repeat-x;
	border-color: #c1e2fc;
}

.alert-primary hr {
	border-top-color: #a9d7fb;
}

.alert-primary .alert-link {
	color: #0b3251;
}

.alert-secondary {
	color: #858585;
	background: white -webkit-gradient(linear, left top, left bottom, from(white), to(white)) repeat-x;
	background: white linear-gradient(180deg, white, white) repeat-x;
	border-color: white;
}

.alert-secondary hr {
	border-top-color: #f2f2f2;
}

.alert-secondary .alert-link {
	color: #6c6b6b;
}

.alert-success {
	color: #285b2a;
	background: #dbefdc -webkit-gradient(linear, left top, left bottom, from(#e0f1e1), to(#dbefdc)) repeat-x;
	background: #dbefdc linear-gradient(180deg, #e0f1e1, #dbefdc) repeat-x;
	border-color: #cde9ce;
}

.alert-success hr {
	border-top-color: #bbe1bd;
}

.alert-success .alert-link {
	color: #18381a;
}

.alert-info {
	color: #51145c;
	background: #ebd4ef -webkit-gradient(linear, left top, left bottom, from(#eedaf1), to(#ebd4ef)) repeat-x;
	background: #ebd4ef linear-gradient(180deg, #eedaf1, #ebd4ef) repeat-x;
	border-color: #e3c3e9;
}

.alert-info hr {
	border-top-color: #dab0e2;
}

.alert-info .alert-link {
	color: #2c0b32;
}

.alert-warning {
	color: #854f00;
	background: #ffeacc -webkit-gradient(linear, left top, left bottom, from(#ffedd4), to(#ffeacc)) repeat-x;
	background: #ffeacc linear-gradient(180deg, #ffedd4, #ffeacc) repeat-x;
	border-color: #ffe2b8;
}

.alert-warning hr {
	border-top-color: #ffd89f;
}

.alert-warning .alert-link {
	color: #523100;
}

.alert-danger {
	color: #770f12;
	background: #fad2d3 -webkit-gradient(linear, left top, left bottom, from(#fbd9da), to(#fad2d3)) repeat-x;
	background: #fad2d3 linear-gradient(180deg, #fbd9da, #fad2d3) repeat-x;
	border-color: #f8bfc1;
}

.alert-danger hr {
	border-top-color: #f5a8ab;
}

.alert-danger .alert-link {
	color: #4a090b;
}

.alert-light {
	color: #858585;
	background: white -webkit-gradient(linear, left top, left bottom, from(white), to(white)) repeat-x;
	background: white linear-gradient(180deg, white, white) repeat-x;
	border-color: white;
}

.alert-light hr {
	border-top-color: #f2f2f2;
}

.alert-light .alert-link {
	color: #6c6b6b;
}

.alert-dark {
	color: #121212;
	background: lightgray -webkit-gradient(linear, left top, left bottom, from(#dadada), to(lightgray)) repeat-x;
	background: lightgray linear-gradient(180deg, #dadada, lightgray) repeat-x;
	border-color: #c1c1c1;
}

.alert-dark hr {
	border-top-color: #b4b4b4;
}

.alert-dark .alert-link {
	color: black;
}

@-webkit-keyframes progress-bar-stripes {
	from {
	background-position: 0.375rem 0;
	}
	to {
	background-position: 0 0;
	}
}

@keyframes progress-bar-stripes {
	from {
	background-position: 0.375rem 0;
	}
	to {
	background-position: 0 0;
	}
}

.progress {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	height: 0.375rem;
	overflow: hidden;
	font-size: 0.609375rem;
	background-color: #eee;
	border-radius: 0;
}

.progress-bar {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	color: #fff;
	text-align: center;
	white-space: nowrap;
	background-color: #2196F3;
	-webkit-transition: width 0.6s ease;
	transition: width 0.6s ease;
}

@media screen and (prefers-reduced-motion: reduce) {
	.progress-bar {
	-webkit-transition: none;
	transition: none;
	}
}

.progress-bar-striped {
	background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
	background-size: 0.375rem 0.375rem;
}

.progress-bar-animated {
	-webkit-animation: progress-bar-stripes 1s linear infinite;
	animation: progress-bar-stripes 1s linear infinite;
}

.media {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: start;
	-ms-flex-align: start;
	align-items: flex-start;
}

.media-body {
	-webkit-box-flex: 1;
	-ms-flex: 1;
	flex: 1;
}

.list-group {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	padding-left: 0;
	margin-bottom: 0;
}

.list-group-item-action {
	width: 100%;
	color: #444;
	text-align: inherit;
}

.list-group-item-action:hover, .list-group-item-action:focus {
	color: #444;
	text-decoration: none;
	background-color: #f8f9fa;
}

.list-group-item-action:active {
	color: #444;
	background-color: #eee;
}

.list-group-item {
	position: relative;
	display: block;
	padding: 0.75rem 1.25rem;
	margin-bottom: -1px;
	background-color: #fff;
	border: 1px solid rgba(0, 0, 0, 0.125);
}

.list-group-item:first-child {
	border-top-left-radius: 0.25rem;
	border-top-right-radius: 0.25rem;
}

.list-group-item:last-child {
	margin-bottom: 0;
	border-bottom-right-radius: 0.25rem;
	border-bottom-left-radius: 0.25rem;
}

.list-group-item:hover, .list-group-item:focus {
	z-index: 1;
	text-decoration: none;
}

.list-group-item.disabled, .list-group-item:disabled {
	color: #666;
	background-color: #fff;
}

.list-group-item.active {
	z-index: 2;
	color: #fff;
	background-color: #2196F3;
	border-color: #2196F3;
}

.list-group-flush .list-group-item {
	border-right: 0;
	border-left: 0;
	border-radius: 0;
}

.list-group-flush:first-child .list-group-item:first-child {
	border-top: 0;
}

.list-group-flush:last-child .list-group-item:last-child {
	border-bottom: 0;
}

.list-group-item-primary {
	color: #114e7e;
	background-color: #c1e2fc;
}

.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {
	color: #114e7e;
	background-color: #a9d7fb;
}

.list-group-item-primary.list-group-item-action.active {
	color: #fff;
	background-color: #114e7e;
	border-color: #114e7e;
}

.list-group-item-secondary {
	color: #858585;
	background-color: white;
}

.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {
	color: #858585;
	background-color: #f2f2f2;
}

.list-group-item-secondary.list-group-item-action.active {
	color: #fff;
	background-color: #858585;
	border-color: #858585;
}

.list-group-item-success {
	color: #285b2a;
	background-color: #cde9ce;
}

.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {
	color: #285b2a;
	background-color: #bbe1bd;
}

.list-group-item-success.list-group-item-action.active {
	color: #fff;
	background-color: #285b2a;
	border-color: #285b2a;
}

.list-group-item-info {
	color: #51145c;
	background-color: #e3c3e9;
}

.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {
	color: #51145c;
	background-color: #dab0e2;
}

.list-group-item-info.list-group-item-action.active {
	color: #fff;
	background-color: #51145c;
	border-color: #51145c;
}

.list-group-item-warning {
	color: #854f00;
	background-color: #ffe2b8;
}

.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {
	color: #854f00;
	background-color: #ffd89f;
}

.list-group-item-warning.list-group-item-action.active {
	color: #fff;
	background-color: #854f00;
	border-color: #854f00;
}

.list-group-item-danger {
	color: #770f12;
	background-color: #f8bfc1;
}

.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {
	color: #770f12;
	background-color: #f5a8ab;
}

.list-group-item-danger.list-group-item-action.active {
	color: #fff;
	background-color: #770f12;
	border-color: #770f12;
}

.list-group-item-light {
	color: #858585;
	background-color: white;
}

.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {
	color: #858585;
	background-color: #f2f2f2;
}

.list-group-item-light.list-group-item-action.active {
	color: #fff;
	background-color: #858585;
	border-color: #858585;
}

.list-group-item-dark {
	color: #121212;
	background-color: #c1c1c1;
}

.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {
	color: #121212;
	background-color: #b4b4b4;
}

.list-group-item-dark.list-group-item-action.active {
	color: #fff;
	background-color: #121212;
	border-color: #121212;
}

.close {
	float: right;
	font-size: 2.125rem;
	font-weight: 300;
	line-height: 1;
	color: #000;
	text-shadow: 0 1px 0 #fff;
	opacity: .5;
}

.close:not(:disabled):not(.disabled) {
	cursor: pointer;
}

.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {
	color: #000;
	text-decoration: none;
	opacity: .75;
}

button.close {
	padding: 0;
	background-color: transparent;
	border: 0;
	-webkit-appearance: none;
}

.modal-open {
	overflow: hidden;
}

.modal-open .modal {
	overflow-x: hidden;
	overflow-y: auto;
}

.modal {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1050;
	display: none;
	overflow: hidden;
	outline: 0;
}

.modal-dialog {
	position: relative;
	width: auto;
	margin: 0.5rem;
	pointer-events: none;
}

.modal.fade .modal-dialog {
	-webkit-transition: -webkit-transform 0.3s ease-out;
	transition: -webkit-transform 0.3s ease-out;
	transition: transform 0.3s ease-out;
	transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
	-webkit-transform: translate(0, -25%);
	transform: translate(0, -25%);
}

@media screen and (prefers-reduced-motion: reduce) {
	.modal.fade .modal-dialog {
	-webkit-transition: none;
	transition: none;
	}
}

.modal.show .modal-dialog {
	-webkit-transform: translate(0, 0);
	transform: translate(0, 0);
}

.modal-dialog-centered {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	min-height: calc(100% - (0.5rem * 2));
}

.modal-dialog-centered::before {
	display: block;
	height: calc(100vh - (0.5rem * 2));
	content: "";
}

.modal-content {
	position: relative;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	width: 100%;
	pointer-events: auto;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid transparent;
	border-radius: 0.3rem;
	outline: 0;
}

.modal-backdrop {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1040;
	background-color: #000;
}

.modal-backdrop.fade {
	opacity: 0;
}

.modal-backdrop.show {
	opacity: 0.5;
}

.modal-header {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: start;
	-ms-flex-align: start;
	align-items: flex-start;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	padding: 1rem;
	border-bottom: 1px solid #eee;
	border-top-left-radius: 0.3rem;
	border-top-right-radius: 0.3rem;
}

.modal-header .close {
	padding: 1rem;
	margin: -1rem -1rem -1rem auto;
}

.modal-title {
	margin-bottom: 0;
	line-height: 1.5;
}

.modal-body {
	position: relative;
	-webkit-box-flex: 1;
	-ms-flex: 1 1 auto;
	flex: 1 1 auto;
	padding: 1rem;
}

.modal-footer {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: end;
	-ms-flex-pack: end;
	justify-content: flex-end;
	padding: 1rem;
	border-top: 1px solid #eee;
}

.modal-footer > :not(:first-child) {
	margin-left: .25rem;
}

.modal-footer > :not(:last-child) {
	margin-right: .25rem;
}

.modal-scrollbar-measure {
	position: absolute;
	top: -9999px;
	width: 50px;
	height: 50px;
	overflow: scroll;
}

@media (min-width: 576px) {
	.modal-dialog {
	max-width: 500px;
	margin: 1.75rem auto;
	}
	.modal-dialog-centered {
	min-height: calc(100% - (1.75rem * 2));
	}
	.modal-dialog-centered::before {
	height: calc(100vh - (1.75rem * 2));
	}
	.modal-sm {
	max-width: 300px;
	}
}

@media (min-width: 992px) {
	.modal-lg {
	max-width: 800px;
	}
}

.tooltip {
	position: absolute;
	z-index: 1070;
	display: block;
	margin: 0;
	font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-style: normal;
	font-weight: 400;
	line-height: 1.5;
	text-align: left;
	text-align: start;
	text-decoration: none;
	text-shadow: none;
	text-transform: none;
	letter-spacing: normal;
	word-break: normal;
	word-spacing: normal;
	white-space: normal;
	line-break: auto;
	font-size: 0.7109375rem;
	word-wrap: break-word;
	opacity: 0;
}

.tooltip.show {
	opacity: 0.9;
}

.tooltip .arrow {
	position: absolute;
	display: block;
	width: 0.8rem;
	height: 0.4rem;
}

.tooltip .arrow::before {
	position: absolute;
	content: "";
	border-color: transparent;
	border-style: solid;
}

.bs-tooltip-top, .bs-tooltip-auto[x-placement^="top"] {
	padding: 0.4rem 0;
}

.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^="top"] .arrow {
	bottom: 0;
}

.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^="top"] .arrow::before {
	top: 0;
	border-width: 0.4rem 0.4rem 0;
	border-top-color: #444;
}

.bs-tooltip-right, .bs-tooltip-auto[x-placement^="right"] {
	padding: 0 0.4rem;
}

.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^="right"] .arrow {
	left: 0;
	width: 0.4rem;
	height: 0.8rem;
}

.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^="right"] .arrow::before {
	right: 0;
	border-width: 0.4rem 0.4rem 0.4rem 0;
	border-right-color: #444;
}

.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^="bottom"] {
	padding: 0.4rem 0;
}

.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^="bottom"] .arrow {
	top: 0;
}

.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
	bottom: 0;
	border-width: 0 0.4rem 0.4rem;
	border-bottom-color: #444;
}

.bs-tooltip-left, .bs-tooltip-auto[x-placement^="left"] {
	padding: 0 0.4rem;
}

.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^="left"] .arrow {
	right: 0;
	width: 0.4rem;
	height: 0.8rem;
}

.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^="left"] .arrow::before {
	left: 0;
	border-width: 0.4rem 0 0.4rem 0.4rem;
	border-left-color: #444;
}

.tooltip-inner {
	max-width: 200px;
	padding: 0.25rem 0.5rem;
	color: #fff;
	text-align: center;
	background-color: #444;
	border-radius: 0.25rem;
}

.popover {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1060;
	display: block;
	max-width: 276px;
	font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-style: normal;
	font-weight: 400;
	line-height: 1.5;
	text-align: left;
	text-align: start;
	text-decoration: none;
	text-shadow: none;
	text-transform: none;
	letter-spacing: normal;
	word-break: normal;
	word-spacing: normal;
	white-space: normal;
	line-break: auto;
	font-size: 0.7109375rem;
	word-wrap: break-word;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 0.3rem;
}

.popover .arrow {
	position: absolute;
	display: block;
	width: 1rem;
	height: 0.5rem;
	margin: 0 0.3rem;
}

.popover .arrow::before, .popover .arrow::after {
	position: absolute;
	display: block;
	content: "";
	border-color: transparent;
	border-style: solid;
}

.bs-popover-top, .bs-popover-auto[x-placement^="top"] {
	margin-bottom: 0.5rem;
}

.bs-popover-top .arrow, .bs-popover-auto[x-placement^="top"] .arrow {
	bottom: calc((0.5rem + 1px) * -1);
}

.bs-popover-top .arrow::before, .bs-popover-auto[x-placement^="top"] .arrow::before,
.bs-popover-top .arrow::after, .bs-popover-auto[x-placement^="top"] .arrow::after {
	border-width: 0.5rem 0.5rem 0;
}

.bs-popover-top .arrow::before, .bs-popover-auto[x-placement^="top"] .arrow::before {
	bottom: 0;
	border-top-color: rgba(0, 0, 0, 0.25);
}

.bs-popover-top .arrow::after, .bs-popover-auto[x-placement^="top"] .arrow::after {
	bottom: 1px;
	border-top-color: #fff;
}

.bs-popover-right, .bs-popover-auto[x-placement^="right"] {
	margin-left: 0.5rem;
}

.bs-popover-right .arrow, .bs-popover-auto[x-placement^="right"] .arrow {
	left: calc((0.5rem + 1px) * -1);
	width: 0.5rem;
	height: 1rem;
	margin: 0.3rem 0;
}

.bs-popover-right .arrow::before, .bs-popover-auto[x-placement^="right"] .arrow::before,
.bs-popover-right .arrow::after, .bs-popover-auto[x-placement^="right"] .arrow::after {
	border-width: 0.5rem 0.5rem 0.5rem 0;
}

.bs-popover-right .arrow::before, .bs-popover-auto[x-placement^="right"] .arrow::before {
	left: 0;
	border-right-color: rgba(0, 0, 0, 0.25);
}

.bs-popover-right .arrow::after, .bs-popover-auto[x-placement^="right"] .arrow::after {
	left: 1px;
	border-right-color: #fff;
}

.bs-popover-bottom, .bs-popover-auto[x-placement^="bottom"] {
	margin-top: 0.5rem;
}

.bs-popover-bottom .arrow, .bs-popover-auto[x-placement^="bottom"] .arrow {
	top: calc((0.5rem + 1px) * -1);
}

.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^="bottom"] .arrow::before,
.bs-popover-bottom .arrow::after, .bs-popover-auto[x-placement^="bottom"] .arrow::after {
	border-width: 0 0.5rem 0.5rem 0.5rem;
}

.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^="bottom"] .arrow::before {
	top: 0;
	border-bottom-color: rgba(0, 0, 0, 0.25);
}

.bs-popover-bottom .arrow::after, .bs-popover-auto[x-placement^="bottom"] .arrow::after {
	top: 1px;
	border-bottom-color: #fff;
}

.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^="bottom"] .popover-header::before {
	position: absolute;
	top: 0;
	left: 50%;
	display: block;
	width: 1rem;
	margin-left: -0.5rem;
	content: "";
	border-bottom: 1px solid #f7f7f7;
}

.bs-popover-left, .bs-popover-auto[x-placement^="left"] {
	margin-right: 0.5rem;
}

.bs-popover-left .arrow, .bs-popover-auto[x-placement^="left"] .arrow {
	right: calc((0.5rem + 1px) * -1);
	width: 0.5rem;
	height: 1rem;
	margin: 0.3rem 0;
}

.bs-popover-left .arrow::before, .bs-popover-auto[x-placement^="left"] .arrow::before,
.bs-popover-left .arrow::after, .bs-popover-auto[x-placement^="left"] .arrow::after {
	border-width: 0.5rem 0 0.5rem 0.5rem;
}

.bs-popover-left .arrow::before, .bs-popover-auto[x-placement^="left"] .arrow::before {
	right: 0;
	border-left-color: rgba(0, 0, 0, 0.25);
}

.bs-popover-left .arrow::after, .bs-popover-auto[x-placement^="left"] .arrow::after {
	right: 1px;
	border-left-color: #fff;
}

.popover-header {
	padding: 0.5rem 0.75rem;
	margin-bottom: 0;
	font-size: 0.8125rem;
	color: inherit;
	background-color: #f7f7f7;
	border-bottom: 1px solid #ebebeb;
	border-top-left-radius: calc(0.3rem - 1px);
	border-top-right-radius: calc(0.3rem - 1px);
}

.popover-header:empty {
	display: none;
}

.popover-body {
	padding: 0.5rem 0.75rem;
	color: #444;
}

.carousel {
	position: relative;
}

.carousel-inner {
	position: relative;
	width: 100%;
	overflow: hidden;
}

.carousel-item {
	position: relative;
	display: none;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	width: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	-webkit-perspective: 1000px;
	perspective: 1000px;
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
	display: block;
	-webkit-transition: -webkit-transform 0.6s ease;
	transition: -webkit-transform 0.6s ease;
	transition: transform 0.6s ease;
	transition: transform 0.6s ease, -webkit-transform 0.6s ease;
}

@media screen and (prefers-reduced-motion: reduce) {
	.carousel-item.active,
	.carousel-item-next,
	.carousel-item-prev {
	-webkit-transition: none;
	transition: none;
	}
}

.carousel-item-next,
.carousel-item-prev {
	position: absolute;
	top: 0;
}

.carousel-item-next.carousel-item-left,
.carousel-item-prev.carousel-item-right {
	-webkit-transform: translateX(0);
	transform: translateX(0);
}

@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
	.carousel-item-next.carousel-item-left,
	.carousel-item-prev.carousel-item-right {
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
	}
}

.carousel-item-next,
.active.carousel-item-right {
	-webkit-transform: translateX(100%);
	transform: translateX(100%);
}

@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
	.carousel-item-next,
	.active.carousel-item-right {
	-webkit-transform: translate3d(100%, 0, 0);
	transform: translate3d(100%, 0, 0);
	}
}

.carousel-item-prev,
.active.carousel-item-left {
	-webkit-transform: translateX(-100%);
	transform: translateX(-100%);
}

@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
	.carousel-item-prev,
	.active.carousel-item-left {
	-webkit-transform: translate3d(-100%, 0, 0);
	transform: translate3d(-100%, 0, 0);
	}
}

.carousel-fade .carousel-item {
	opacity: 0;
	-webkit-transition-duration: .6s;
	transition-duration: .6s;
	-webkit-transition-property: opacity;
	transition-property: opacity;
}

.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-left,
.carousel-fade .carousel-item-prev.carousel-item-right {
	opacity: 1;
}

.carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-right {
	opacity: 0;
}

.carousel-fade .carousel-item-next,
.carousel-fade .carousel-item-prev,
.carousel-fade .carousel-item.active,
.carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-prev {
	-webkit-transform: translateX(0);
	transform: translateX(0);
}

@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
	.carousel-fade .carousel-item-next,
	.carousel-fade .carousel-item-prev,
	.carousel-fade .carousel-item.active,
	.carousel-fade .active.carousel-item-left,
	.carousel-fade .active.carousel-item-prev {
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
	}
}

.carousel-control-prev,
.carousel-control-next {
	position: absolute;
	top: 0;
	bottom: 0;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	width: 15%;
	color: #fff;
	text-align: center;
	opacity: 0.5;
}

.carousel-control-prev:hover, .carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
	color: #fff;
	text-decoration: none;
	outline: 0;
	opacity: .9;
}

.carousel-control-prev {
	left: 0;
	background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.25)), to(rgba(0, 0, 0, 0.001)));
	background: linear-gradient(90deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.001));
}

.carousel-control-next {
	right: 0;
	background: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0.25)), to(rgba(0, 0, 0, 0.001)));
	background: linear-gradient(270deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.001));
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
	display: inline-block;
	width: 20px;
	height: 20px;
	background: transparent no-repeat center center;
	background-size: 100% 100%;
}

.carousel-control-prev-icon {
	background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}

.carousel-control-next-icon {
	background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
}

.carousel-indicators {
	position: absolute;
	right: 0;
	bottom: 10px;
	left: 0;
	z-index: 15;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	padding-left: 0;
	margin-right: 15%;
	margin-left: 15%;
	list-style: none;
}

.carousel-indicators li {
	position: relative;
	-webkit-box-flex: 0;
	-ms-flex: 0 1 auto;
	flex: 0 1 auto;
	width: 30px;
	height: 3px;
	margin-right: 3px;
	margin-left: 3px;
	text-indent: -999px;
	cursor: pointer;
	background-color: rgba(255, 255, 255, 0.5);
}

.carousel-indicators li::before {
	position: absolute;
	top: -10px;
	left: 0;
	display: inline-block;
	width: 100%;
	height: 10px;
	content: "";
}

.carousel-indicators li::after {
	position: absolute;
	bottom: -10px;
	left: 0;
	display: inline-block;
	width: 100%;
	height: 10px;
	content: "";
}

.carousel-indicators .active {
	background-color: #fff;
}

.carousel-caption {
	position: absolute;
	right: 15%;
	bottom: 20px;
	left: 15%;
	z-index: 10;
	padding-top: 20px;
	padding-bottom: 20px;
	color: #fff;
	text-align: center;
}

.align-baseline {
	vertical-align: baseline !important;
}

.align-top {
	vertical-align: top !important;
}

.align-middle {
	vertical-align: middle !important;
}

.align-bottom {
	vertical-align: bottom !important;
}

.align-text-bottom {
	vertical-align: text-bottom !important;
}

.align-text-top {
	vertical-align: text-top !important;
}

.bg-primary {
	background-color: #2196F3 !important;
}

a.bg-primary:hover, a.bg-primary:focus,
button.bg-primary:hover,
button.bg-primary:focus {
	background-color: #0c7cd5 !important;
}

.bg-secondary {
	background-color: #fff !important;
}

a.bg-secondary:hover, a.bg-secondary:focus,
button.bg-secondary:hover,
button.bg-secondary:focus {
	background-color: #e6e5e5 !important;
}

.bg-success {
	background-color: #4CAF50 !important;
}

a.bg-success:hover, a.bg-success:focus,
button.bg-success:hover,
button.bg-success:focus {
	background-color: #3d8b40 !important;
}

.bg-info {
	background-color: #9C27B0 !important;
}

a.bg-info:hover, a.bg-info:focus,
button.bg-info:hover,
button.bg-info:focus {
	background-color: #771e86 !important;
}

.bg-warning {
	background-color: #ff9800 !important;
}

a.bg-warning:hover, a.bg-warning:focus,
button.bg-warning:hover,
button.bg-warning:focus {
	background-color: #cc7a00 !important;
}

.bg-danger {
	background-color: #e51c23 !important;
}

a.bg-danger:hover, a.bg-danger:focus,
button.bg-danger:hover,
button.bg-danger:focus {
	background-color: #b9151b !important;
}

.bg-light {
	background-color: #fff !important;
}

a.bg-light:hover, a.bg-light:focus,
button.bg-light:hover,
button.bg-light:focus {
	background-color: #e6e5e5 !important;
}

.bg-dark {
	background-color: #222 !important;
}

a.bg-dark:hover, a.bg-dark:focus,
button.bg-dark:hover,
button.bg-dark:focus {
	background-color: #090808 !important;
}

.bg-gradient-primary {
	background: #2196F3 -webkit-gradient(linear, left top, left bottom, from(#42a6f5), to(#2196F3)) repeat-x !important;
	background: #2196F3 linear-gradient(180deg, #42a6f5, #2196F3) repeat-x !important;
}

.bg-gradient-secondary {
	background: #fff -webkit-gradient(linear, left top, left bottom, from(white), to(#fff)) repeat-x !important;
	background: #fff linear-gradient(180deg, white, #fff) repeat-x !important;
}

.bg-gradient-success {
	background: #4CAF50 -webkit-gradient(linear, left top, left bottom, from(#67bb6a), to(#4CAF50)) repeat-x !important;
	background: #4CAF50 linear-gradient(180deg, #67bb6a, #4CAF50) repeat-x !important;
}

.bg-gradient-info {
	background: #9C27B0 -webkit-gradient(linear, left top, left bottom, from(#ab47bc), to(#9C27B0)) repeat-x !important;
	background: #9C27B0 linear-gradient(180deg, #ab47bc, #9C27B0) repeat-x !important;
}

.bg-gradient-warning {
	background: #ff9800 -webkit-gradient(linear, left top, left bottom, from(#ffa726), to(#ff9800)) repeat-x !important;
	background: #ff9800 linear-gradient(180deg, #ffa726, #ff9800) repeat-x !important;
}

.bg-gradient-danger {
	background: #e51c23 -webkit-gradient(linear, left top, left bottom, from(#e93e44), to(#e51c23)) repeat-x !important;
	background: #e51c23 linear-gradient(180deg, #e93e44, #e51c23) repeat-x !important;
}

.bg-gradient-light {
	background: #fff -webkit-gradient(linear, left top, left bottom, from(white), to(#fff)) repeat-x !important;
	background: #fff linear-gradient(180deg, white, #fff) repeat-x !important;
}

.bg-gradient-dark {
	background: #222 -webkit-gradient(linear, left top, left bottom, from(#434343), to(#222)) repeat-x !important;
	background: #222 linear-gradient(180deg, #434343, #222) repeat-x !important;
}

.bg-white {
	background-color: #fff !important;
}

.bg-transparent {
	background-color: transparent !important;
}

.border {
	border: 1px solid #dee2e6 !important;
}

.border-top {
	border-top: 1px solid #dee2e6 !important;
}

.border-right {
	border-right: 1px solid #dee2e6 !important;
}

.border-bottom {
	border-bottom: 1px solid #dee2e6 !important;
}

.border-left {
	border-left: 1px solid #dee2e6 !important;
}

.border-0 {
	border: 0 !important;
}

.border-top-0 {
	border-top: 0 !important;
}

.border-right-0 {
	border-right: 0 !important;
}

.border-bottom-0 {
	border-bottom: 0 !important;
}

.border-left-0 {
	border-left: 0 !important;
}

.border-primary {
	border-color: #2196F3 !important;
}

.border-secondary {
	border-color: #fff !important;
}

.border-success {
	border-color: #4CAF50 !important;
}

.border-info {
	border-color: #9C27B0 !important;
}

.border-warning {
	border-color: #ff9800 !important;
}

.border-danger {
	border-color: #e51c23 !important;
}

.border-light {
	border-color: #fff !important;
}

.border-dark {
	border-color: #222 !important;
}

.border-white {
	border-color: #fff !important;
}

.rounded {
	border-radius: 0.25rem !important;
}

.rounded-top {
	border-top-left-radius: 0.25rem !important;
	border-top-right-radius: 0.25rem !important;
}

.rounded-right {
	border-top-right-radius: 0.25rem !important;
	border-bottom-right-radius: 0.25rem !important;
}

.rounded-bottom {
	border-bottom-right-radius: 0.25rem !important;
	border-bottom-left-radius: 0.25rem !important;
}

.rounded-left {
	border-top-left-radius: 0.25rem !important;
	border-bottom-left-radius: 0.25rem !important;
}

.rounded-circle {
	border-radius: 50% !important;
}

.rounded-0 {
	border-radius: 0 !important;
}

.clearfix::after {
	display: block;
	clear: both;
	content: "";
}

.d-none {
	display: none !important;
}

.d-inline {
	display: inline !important;
}

.d-inline-block {
	display: inline-block !important;
}

.d-block {
	display: block !important;
}

.d-table {
	display: table !important;
}

.d-table-row {
	display: table-row !important;
}

.d-table-cell {
	display: table-cell !important;
}

.d-flex {
	display: -webkit-box !important;
	display: -ms-flexbox !important;
	display: flex !important;
}

.d-inline-flex {
	display: -webkit-inline-box !important;
	display: -ms-inline-flexbox !important;
	display: inline-flex !important;
}

@media (min-width: 576px) {
	.d-sm-none {
	display: none !important;
	}
	.d-sm-inline {
	display: inline !important;
	}
	.d-sm-inline-block {
	display: inline-block !important;
	}
	.d-sm-block {
	display: block !important;
	}
	.d-sm-table {
	display: table !important;
	}
	.d-sm-table-row {
	display: table-row !important;
	}
	.d-sm-table-cell {
	display: table-cell !important;
	}
	.d-sm-flex {
	display: -webkit-box !important;
	display: -ms-flexbox !important;
	display: flex !important;
	}
	.d-sm-inline-flex {
	display: -webkit-inline-box !important;
	display: -ms-inline-flexbox !important;
	display: inline-flex !important;
	}
}

@media (min-width: 768px) {
	.d-md-none {
	display: none !important;
	}
	.d-md-inline {
	display: inline !important;
	}
	.d-md-inline-block {
	display: inline-block !important;
	}
	.d-md-block {
	display: block !important;
	}
	.d-md-table {
	display: table !important;
	}
	.d-md-table-row {
	display: table-row !important;
	}
	.d-md-table-cell {
	display: table-cell !important;
	}
	.d-md-flex {
	display: -webkit-box !important;
	display: -ms-flexbox !important;
	display: flex !important;
	}
	.d-md-inline-flex {
	display: -webkit-inline-box !important;
	display: -ms-inline-flexbox !important;
	display: inline-flex !important;
	}
}

@media (min-width: 992px) {
	.d-lg-none {
	display: none !important;
	}
	.d-lg-inline {
	display: inline !important;
	}
	.d-lg-inline-block {
	display: inline-block !important;
	}
	.d-lg-block {
	display: block !important;
	}
	.d-lg-table {
	display: table !important;
	}
	.d-lg-table-row {
	display: table-row !important;
	}
	.d-lg-table-cell {
	display: table-cell !important;
	}
	.d-lg-flex {
	display: -webkit-box !important;
	display: -ms-flexbox !important;
	display: flex !important;
	}
	.d-lg-inline-flex {
	display: -webkit-inline-box !important;
	display: -ms-inline-flexbox !important;
	display: inline-flex !important;
	}
}

@media (min-width: 1200px) {
	.d-xl-none {
	display: none !important;
	}
	.d-xl-inline {
	display: inline !important;
	}
	.d-xl-inline-block {
	display: inline-block !important;
	}
	.d-xl-block {
	display: block !important;
	}
	.d-xl-table {
	display: table !important;
	}
	.d-xl-table-row {
	display: table-row !important;
	}
	.d-xl-table-cell {
	display: table-cell !important;
	}
	.d-xl-flex {
	display: -webkit-box !important;
	display: -ms-flexbox !important;
	display: flex !important;
	}
	.d-xl-inline-flex {
	display: -webkit-inline-box !important;
	display: -ms-inline-flexbox !important;
	display: inline-flex !important;
	}
}

@media print {
	.d-print-none {
	display: none !important;
	}
	.d-print-inline {
	display: inline !important;
	}
	.d-print-inline-block {
	display: inline-block !important;
	}
	.d-print-block {
	display: block !important;
	}
	.d-print-table {
	display: table !important;
	}
	.d-print-table-row {
	display: table-row !important;
	}
	.d-print-table-cell {
	display: table-cell !important;
	}
	.d-print-flex {
	display: -webkit-box !important;
	display: -ms-flexbox !important;
	display: flex !important;
	}
	.d-print-inline-flex {
	display: -webkit-inline-box !important;
	display: -ms-inline-flexbox !important;
	display: inline-flex !important;
	}
}

.embed-responsive {
	position: relative;
	display: block;
	width: 100%;
	padding: 0;
	overflow: hidden;
}

.embed-responsive::before {
	display: block;
	content: "";
}

.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border: 0;
}

.embed-responsive-21by9::before {
	padding-top: 42.8571428571%;
}

.embed-responsive-16by9::before {
	padding-top: 56.25%;
}

.embed-responsive-4by3::before {
	padding-top: 75%;
}

.embed-responsive-1by1::before {
	padding-top: 100%;
}

.flex-row {
	-webkit-box-orient: horizontal !important;
	-webkit-box-direction: normal !important;
	-ms-flex-direction: row !important;
	flex-direction: row !important;
}

.flex-column {
	-webkit-box-orient: vertical !important;
	-webkit-box-direction: normal !important;
	-ms-flex-direction: column !important;
	flex-direction: column !important;
}

.flex-row-reverse {
	-webkit-box-orient: horizontal !important;
	-webkit-box-direction: reverse !important;
	-ms-flex-direction: row-reverse !important;
	flex-direction: row-reverse !important;
}

.flex-column-reverse {
	-webkit-box-orient: vertical !important;
	-webkit-box-direction: reverse !important;
	-ms-flex-direction: column-reverse !important;
	flex-direction: column-reverse !important;
}

.flex-wrap {
	-ms-flex-wrap: wrap !important;
	flex-wrap: wrap !important;
}

.flex-nowrap {
	-ms-flex-wrap: nowrap !important;
	flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
	-ms-flex-wrap: wrap-reverse !important;
	flex-wrap: wrap-reverse !important;
}

.flex-fill {
	-webkit-box-flex: 1 !important;
	-ms-flex: 1 1 auto !important;
	flex: 1 1 auto !important;
}

.flex-grow-0 {
	-webkit-box-flex: 0 !important;
	-ms-flex-positive: 0 !important;
	flex-grow: 0 !important;
}

.flex-grow-1 {
	-webkit-box-flex: 1 !important;
	-ms-flex-positive: 1 !important;
	flex-grow: 1 !important;
}

.flex-shrink-0 {
	-ms-flex-negative: 0 !important;
	flex-shrink: 0 !important;
}

.flex-shrink-1 {
	-ms-flex-negative: 1 !important;
	flex-shrink: 1 !important;
}

.justify-content-start {
	-webkit-box-pack: start !important;
	-ms-flex-pack: start !important;
	justify-content: flex-start !important;
}

.justify-content-end {
	-webkit-box-pack: end !important;
	-ms-flex-pack: end !important;
	justify-content: flex-end !important;
}

.justify-content-center {
	-webkit-box-pack: center !important;
	-ms-flex-pack: center !important;
	justify-content: center !important;
}

.justify-content-between {
	-webkit-box-pack: justify !important;
	-ms-flex-pack: justify !important;
	justify-content: space-between !important;
}

.justify-content-around {
	-ms-flex-pack: distribute !important;
	justify-content: space-around !important;
}

.align-items-start {
	-webkit-box-align: start !important;
	-ms-flex-align: start !important;
	align-items: flex-start !important;
}

.align-items-end {
	-webkit-box-align: end !important;
	-ms-flex-align: end !important;
	align-items: flex-end !important;
}

.align-items-center {
	-webkit-box-align: center !important;
	-ms-flex-align: center !important;
	align-items: center !important;
}

.align-items-baseline {
	-webkit-box-align: baseline !important;
	-ms-flex-align: baseline !important;
	align-items: baseline !important;
}

.align-items-stretch {
	-webkit-box-align: stretch !important;
	-ms-flex-align: stretch !important;
	align-items: stretch !important;
}

.align-content-start {
	-ms-flex-line-pack: start !important;
	align-content: flex-start !important;
}

.align-content-end {
	-ms-flex-line-pack: end !important;
	align-content: flex-end !important;
}

.align-content-center {
	-ms-flex-line-pack: center !important;
	align-content: center !important;
}

.align-content-between {
	-ms-flex-line-pack: justify !important;
	align-content: space-between !important;
}

.align-content-around {
	-ms-flex-line-pack: distribute !important;
	align-content: space-around !important;
}

.align-content-stretch {
	-ms-flex-line-pack: stretch !important;
	align-content: stretch !important;
}

.align-self-auto {
	-ms-flex-item-align: auto !important;
	align-self: auto !important;
}

.align-self-start {
	-ms-flex-item-align: start !important;
	align-self: flex-start !important;
}

.align-self-end {
	-ms-flex-item-align: end !important;
	align-self: flex-end !important;
}

.align-self-center {
	-ms-flex-item-align: center !important;
	align-self: center !important;
}

.align-self-baseline {
	-ms-flex-item-align: baseline !important;
	align-self: baseline !important;
}

.align-self-stretch {
	-ms-flex-item-align: stretch !important;
	align-self: stretch !important;
}

@media (min-width: 576px) {
	.flex-sm-row {
	-webkit-box-orient: horizontal !important;
	-webkit-box-direction: normal !important;
	-ms-flex-direction: row !important;
	flex-direction: row !important;
	}
	.flex-sm-column {
	-webkit-box-orient: vertical !important;
	-webkit-box-direction: normal !important;
	-ms-flex-direction: column !important;
	flex-direction: column !important;
	}
	.flex-sm-row-reverse {
	-webkit-box-orient: horizontal !important;
	-webkit-box-direction: reverse !important;
	-ms-flex-direction: row-reverse !important;
	flex-direction: row-reverse !important;
	}
	.flex-sm-column-reverse {
	-webkit-box-orient: vertical !important;
	-webkit-box-direction: reverse !important;
	-ms-flex-direction: column-reverse !important;
	flex-direction: column-reverse !important;
	}
	.flex-sm-wrap {
	-ms-flex-wrap: wrap !important;
	flex-wrap: wrap !important;
	}
	.flex-sm-nowrap {
	-ms-flex-wrap: nowrap !important;
	flex-wrap: nowrap !important;
	}
	.flex-sm-wrap-reverse {
	-ms-flex-wrap: wrap-reverse !important;
	flex-wrap: wrap-reverse !important;
	}
	.flex-sm-fill {
	-webkit-box-flex: 1 !important;
	-ms-flex: 1 1 auto !important;
	flex: 1 1 auto !important;
	}
	.flex-sm-grow-0 {
	-webkit-box-flex: 0 !important;
	-ms-flex-positive: 0 !important;
	flex-grow: 0 !important;
	}
	.flex-sm-grow-1 {
	-webkit-box-flex: 1 !important;
	-ms-flex-positive: 1 !important;
	flex-grow: 1 !important;
	}
	.flex-sm-shrink-0 {
	-ms-flex-negative: 0 !important;
	flex-shrink: 0 !important;
	}
	.flex-sm-shrink-1 {
	-ms-flex-negative: 1 !important;
	flex-shrink: 1 !important;
	}
	.justify-content-sm-start {
	-webkit-box-pack: start !important;
	-ms-flex-pack: start !important;
	justify-content: flex-start !important;
	}
	.justify-content-sm-end {
	-webkit-box-pack: end !important;
	-ms-flex-pack: end !important;
	justify-content: flex-end !important;
	}
	.justify-content-sm-center {
	-webkit-box-pack: center !important;
	-ms-flex-pack: center !important;
	justify-content: center !important;
	}
	.justify-content-sm-between {
	-webkit-box-pack: justify !important;
	-ms-flex-pack: justify !important;
	justify-content: space-between !important;
	}
	.justify-content-sm-around {
	-ms-flex-pack: distribute !important;
	justify-content: space-around !important;
	}
	.align-items-sm-start {
	-webkit-box-align: start !important;
	-ms-flex-align: start !important;
	align-items: flex-start !important;
	}
	.align-items-sm-end {
	-webkit-box-align: end !important;
	-ms-flex-align: end !important;
	align-items: flex-end !important;
	}
	.align-items-sm-center {
	-webkit-box-align: center !important;
	-ms-flex-align: center !important;
	align-items: center !important;
	}
	.align-items-sm-baseline {
	-webkit-box-align: baseline !important;
	-ms-flex-align: baseline !important;
	align-items: baseline !important;
	}
	.align-items-sm-stretch {
	-webkit-box-align: stretch !important;
	-ms-flex-align: stretch !important;
	align-items: stretch !important;
	}
	.align-content-sm-start {
	-ms-flex-line-pack: start !important;
	align-content: flex-start !important;
	}
	.align-content-sm-end {
	-ms-flex-line-pack: end !important;
	align-content: flex-end !important;
	}
	.align-content-sm-center {
	-ms-flex-line-pack: center !important;
	align-content: center !important;
	}
	.align-content-sm-between {
	-ms-flex-line-pack: justify !important;
	align-content: space-between !important;
	}
	.align-content-sm-around {
	-ms-flex-line-pack: distribute !important;
	align-content: space-around !important;
	}
	.align-content-sm-stretch {
	-ms-flex-line-pack: stretch !important;
	align-content: stretch !important;
	}
	.align-self-sm-auto {
	-ms-flex-item-align: auto !important;
	align-self: auto !important;
	}
	.align-self-sm-start {
	-ms-flex-item-align: start !important;
	align-self: flex-start !important;
	}
	.align-self-sm-end {
	-ms-flex-item-align: end !important;
	align-self: flex-end !important;
	}
	.align-self-sm-center {
	-ms-flex-item-align: center !important;
	align-self: center !important;
	}
	.align-self-sm-baseline {
	-ms-flex-item-align: baseline !important;
	align-self: baseline !important;
	}
	.align-self-sm-stretch {
	-ms-flex-item-align: stretch !important;
	align-self: stretch !important;
	}
}

@media (min-width: 768px) {
	.flex-md-row {
	-webkit-box-orient: horizontal !important;
	-webkit-box-direction: normal !important;
	-ms-flex-direction: row !important;
	flex-direction: row !important;
	}
	.flex-md-column {
	-webkit-box-orient: vertical !important;
	-webkit-box-direction: normal !important;
	-ms-flex-direction: column !important;
	flex-direction: column !important;
	}
	.flex-md-row-reverse {
	-webkit-box-orient: horizontal !important;
	-webkit-box-direction: reverse !important;
	-ms-flex-direction: row-reverse !important;
	flex-direction: row-reverse !important;
	}
	.flex-md-column-reverse {
	-webkit-box-orient: vertical !important;
	-webkit-box-direction: reverse !important;
	-ms-flex-direction: column-reverse !important;
	flex-direction: column-reverse !important;
	}
	.flex-md-wrap {
	-ms-flex-wrap: wrap !important;
	flex-wrap: wrap !important;
	}
	.flex-md-nowrap {
	-ms-flex-wrap: nowrap !important;
	flex-wrap: nowrap !important;
	}
	.flex-md-wrap-reverse {
	-ms-flex-wrap: wrap-reverse !important;
	flex-wrap: wrap-reverse !important;
	}
	.flex-md-fill {
	-webkit-box-flex: 1 !important;
	-ms-flex: 1 1 auto !important;
	flex: 1 1 auto !important;
	}
	.flex-md-grow-0 {
	-webkit-box-flex: 0 !important;
	-ms-flex-positive: 0 !important;
	flex-grow: 0 !important;
	}
	.flex-md-grow-1 {
	-webkit-box-flex: 1 !important;
	-ms-flex-positive: 1 !important;
	flex-grow: 1 !important;
	}
	.flex-md-shrink-0 {
	-ms-flex-negative: 0 !important;
	flex-shrink: 0 !important;
	}
	.flex-md-shrink-1 {
	-ms-flex-negative: 1 !important;
	flex-shrink: 1 !important;
	}
	.justify-content-md-start {
	-webkit-box-pack: start !important;
	-ms-flex-pack: start !important;
	justify-content: flex-start !important;
	}
	.justify-content-md-end {
	-webkit-box-pack: end !important;
	-ms-flex-pack: end !important;
	justify-content: flex-end !important;
	}
	.justify-content-md-center {
	-webkit-box-pack: center !important;
	-ms-flex-pack: center !important;
	justify-content: center !important;
	}
	.justify-content-md-between {
	-webkit-box-pack: justify !important;
	-ms-flex-pack: justify !important;
	justify-content: space-between !important;
	}
	.justify-content-md-around {
	-ms-flex-pack: distribute !important;
	justify-content: space-around !important;
	}
	.align-items-md-start {
	-webkit-box-align: start !important;
	-ms-flex-align: start !important;
	align-items: flex-start !important;
	}
	.align-items-md-end {
	-webkit-box-align: end !important;
	-ms-flex-align: end !important;
	align-items: flex-end !important;
	}
	.align-items-md-center {
	-webkit-box-align: center !important;
	-ms-flex-align: center !important;
	align-items: center !important;
	}
	.align-items-md-baseline {
	-webkit-box-align: baseline !important;
	-ms-flex-align: baseline !important;
	align-items: baseline !important;
	}
	.align-items-md-stretch {
	-webkit-box-align: stretch !important;
	-ms-flex-align: stretch !important;
	align-items: stretch !important;
	}
	.align-content-md-start {
	-ms-flex-line-pack: start !important;
	align-content: flex-start !important;
	}
	.align-content-md-end {
	-ms-flex-line-pack: end !important;
	align-content: flex-end !important;
	}
	.align-content-md-center {
	-ms-flex-line-pack: center !important;
	align-content: center !important;
	}
	.align-content-md-between {
	-ms-flex-line-pack: justify !important;
	align-content: space-between !important;
	}
	.align-content-md-around {
	-ms-flex-line-pack: distribute !important;
	align-content: space-around !important;
	}
	.align-content-md-stretch {
	-ms-flex-line-pack: stretch !important;
	align-content: stretch !important;
	}
	.align-self-md-auto {
	-ms-flex-item-align: auto !important;
	align-self: auto !important;
	}
	.align-self-md-start {
	-ms-flex-item-align: start !important;
	align-self: flex-start !important;
	}
	.align-self-md-end {
	-ms-flex-item-align: end !important;
	align-self: flex-end !important;
	}
	.align-self-md-center {
	-ms-flex-item-align: center !important;
	align-self: center !important;
	}
	.align-self-md-baseline {
	-ms-flex-item-align: baseline !important;
	align-self: baseline !important;
	}
	.align-self-md-stretch {
	-ms-flex-item-align: stretch !important;
	align-self: stretch !important;
	}
}

@media (min-width: 992px) {
	.flex-lg-row {
	-webkit-box-orient: horizontal !important;
	-webkit-box-direction: normal !important;
	-ms-flex-direction: row !important;
	flex-direction: row !important;
	}
	.flex-lg-column {
	-webkit-box-orient: vertical !important;
	-webkit-box-direction: normal !important;
	-ms-flex-direction: column !important;
	flex-direction: column !important;
	}
	.flex-lg-row-reverse {
	-webkit-box-orient: horizontal !important;
	-webkit-box-direction: reverse !important;
	-ms-flex-direction: row-reverse !important;
	flex-direction: row-reverse !important;
	}
	.flex-lg-column-reverse {
	-webkit-box-orient: vertical !important;
	-webkit-box-direction: reverse !important;
	-ms-flex-direction: column-reverse !important;
	flex-direction: column-reverse !important;
	}
	.flex-lg-wrap {
	-ms-flex-wrap: wrap !important;
	flex-wrap: wrap !important;
	}
	.flex-lg-nowrap {
	-ms-flex-wrap: nowrap !important;
	flex-wrap: nowrap !important;
	}
	.flex-lg-wrap-reverse {
	-ms-flex-wrap: wrap-reverse !important;
	flex-wrap: wrap-reverse !important;
	}
	.flex-lg-fill {
	-webkit-box-flex: 1 !important;
	-ms-flex: 1 1 auto !important;
	flex: 1 1 auto !important;
	}
	.flex-lg-grow-0 {
	-webkit-box-flex: 0 !important;
	-ms-flex-positive: 0 !important;
	flex-grow: 0 !important;
	}
	.flex-lg-grow-1 {
	-webkit-box-flex: 1 !important;
	-ms-flex-positive: 1 !important;
	flex-grow: 1 !important;
	}
	.flex-lg-shrink-0 {
	-ms-flex-negative: 0 !important;
	flex-shrink: 0 !important;
	}
	.flex-lg-shrink-1 {
	-ms-flex-negative: 1 !important;
	flex-shrink: 1 !important;
	}
	.justify-content-lg-start {
	-webkit-box-pack: start !important;
	-ms-flex-pack: start !important;
	justify-content: flex-start !important;
	}
	.justify-content-lg-end {
	-webkit-box-pack: end !important;
	-ms-flex-pack: end !important;
	justify-content: flex-end !important;
	}
	.justify-content-lg-center {
	-webkit-box-pack: center !important;
	-ms-flex-pack: center !important;
	justify-content: center !important;
	}
	.justify-content-lg-between {
	-webkit-box-pack: justify !important;
	-ms-flex-pack: justify !important;
	justify-content: space-between !important;
	}
	.justify-content-lg-around {
	-ms-flex-pack: distribute !important;
	justify-content: space-around !important;
	}
	.align-items-lg-start {
	-webkit-box-align: start !important;
	-ms-flex-align: start !important;
	align-items: flex-start !important;
	}
	.align-items-lg-end {
	-webkit-box-align: end !important;
	-ms-flex-align: end !important;
	align-items: flex-end !important;
	}
	.align-items-lg-center {
	-webkit-box-align: center !important;
	-ms-flex-align: center !important;
	align-items: center !important;
	}
	.align-items-lg-baseline {
	-webkit-box-align: baseline !important;
	-ms-flex-align: baseline !important;
	align-items: baseline !important;
	}
	.align-items-lg-stretch {
	-webkit-box-align: stretch !important;
	-ms-flex-align: stretch !important;
	align-items: stretch !important;
	}
	.align-content-lg-start {
	-ms-flex-line-pack: start !important;
	align-content: flex-start !important;
	}
	.align-content-lg-end {
	-ms-flex-line-pack: end !important;
	align-content: flex-end !important;
	}
	.align-content-lg-center {
	-ms-flex-line-pack: center !important;
	align-content: center !important;
	}
	.align-content-lg-between {
	-ms-flex-line-pack: justify !important;
	align-content: space-between !important;
	}
	.align-content-lg-around {
	-ms-flex-line-pack: distribute !important;
	align-content: space-around !important;
	}
	.align-content-lg-stretch {
	-ms-flex-line-pack: stretch !important;
	align-content: stretch !important;
	}
	.align-self-lg-auto {
	-ms-flex-item-align: auto !important;
	align-self: auto !important;
	}
	.align-self-lg-start {
	-ms-flex-item-align: start !important;
	align-self: flex-start !important;
	}
	.align-self-lg-end {
	-ms-flex-item-align: end !important;
	align-self: flex-end !important;
	}
	.align-self-lg-center {
	-ms-flex-item-align: center !important;
	align-self: center !important;
	}
	.align-self-lg-baseline {
	-ms-flex-item-align: baseline !important;
	align-self: baseline !important;
	}
	.align-self-lg-stretch {
	-ms-flex-item-align: stretch !important;
	align-self: stretch !important;
	}
}

@media (min-width: 1200px) {
	.flex-xl-row {
	-webkit-box-orient: horizontal !important;
	-webkit-box-direction: normal !important;
	-ms-flex-direction: row !important;
	flex-direction: row !important;
	}
	.flex-xl-column {
	-webkit-box-orient: vertical !important;
	-webkit-box-direction: normal !important;
	-ms-flex-direction: column !important;
	flex-direction: column !important;
	}
	.flex-xl-row-reverse {
	-webkit-box-orient: horizontal !important;
	-webkit-box-direction: reverse !important;
	-ms-flex-direction: row-reverse !important;
	flex-direction: row-reverse !important;
	}
	.flex-xl-column-reverse {
	-webkit-box-orient: vertical !important;
	-webkit-box-direction: reverse !important;
	-ms-flex-direction: column-reverse !important;
	flex-direction: column-reverse !important;
	}
	.flex-xl-wrap {
	-ms-flex-wrap: wrap !important;
	flex-wrap: wrap !important;
	}
	.flex-xl-nowrap {
	-ms-flex-wrap: nowrap !important;
	flex-wrap: nowrap !important;
	}
	.flex-xl-wrap-reverse {
	-ms-flex-wrap: wrap-reverse !important;
	flex-wrap: wrap-reverse !important;
	}
	.flex-xl-fill {
	-webkit-box-flex: 1 !important;
	-ms-flex: 1 1 auto !important;
	flex: 1 1 auto !important;
	}
	.flex-xl-grow-0 {
	-webkit-box-flex: 0 !important;
	-ms-flex-positive: 0 !important;
	flex-grow: 0 !important;
	}
	.flex-xl-grow-1 {
	-webkit-box-flex: 1 !important;
	-ms-flex-positive: 1 !important;
	flex-grow: 1 !important;
	}
	.flex-xl-shrink-0 {
	-ms-flex-negative: 0 !important;
	flex-shrink: 0 !important;
	}
	.flex-xl-shrink-1 {
	-ms-flex-negative: 1 !important;
	flex-shrink: 1 !important;
	}
	.justify-content-xl-start {
	-webkit-box-pack: start !important;
	-ms-flex-pack: start !important;
	justify-content: flex-start !important;
	}
	.justify-content-xl-end {
	-webkit-box-pack: end !important;
	-ms-flex-pack: end !important;
	justify-content: flex-end !important;
	}
	.justify-content-xl-center {
	-webkit-box-pack: center !important;
	-ms-flex-pack: center !important;
	justify-content: center !important;
	}
	.justify-content-xl-between {
	-webkit-box-pack: justify !important;
	-ms-flex-pack: justify !important;
	justify-content: space-between !important;
	}
	.justify-content-xl-around {
	-ms-flex-pack: distribute !important;
	justify-content: space-around !important;
	}
	.align-items-xl-start {
	-webkit-box-align: start !important;
	-ms-flex-align: start !important;
	align-items: flex-start !important;
	}
	.align-items-xl-end {
	-webkit-box-align: end !important;
	-ms-flex-align: end !important;
	align-items: flex-end !important;
	}
	.align-items-xl-center {
	-webkit-box-align: center !important;
	-ms-flex-align: center !important;
	align-items: center !important;
	}
	.align-items-xl-baseline {
	-webkit-box-align: baseline !important;
	-ms-flex-align: baseline !important;
	align-items: baseline !important;
	}
	.align-items-xl-stretch {
	-webkit-box-align: stretch !important;
	-ms-flex-align: stretch !important;
	align-items: stretch !important;
	}
	.align-content-xl-start {
	-ms-flex-line-pack: start !important;
	align-content: flex-start !important;
	}
	.align-content-xl-end {
	-ms-flex-line-pack: end !important;
	align-content: flex-end !important;
	}
	.align-content-xl-center {
	-ms-flex-line-pack: center !important;
	align-content: center !important;
	}
	.align-content-xl-between {
	-ms-flex-line-pack: justify !important;
	align-content: space-between !important;
	}
	.align-content-xl-around {
	-ms-flex-line-pack: distribute !important;
	align-content: space-around !important;
	}
	.align-content-xl-stretch {
	-ms-flex-line-pack: stretch !important;
	align-content: stretch !important;
	}
	.align-self-xl-auto {
	-ms-flex-item-align: auto !important;
	align-self: auto !important;
	}
	.align-self-xl-start {
	-ms-flex-item-align: start !important;
	align-self: flex-start !important;
	}
	.align-self-xl-end {
	-ms-flex-item-align: end !important;
	align-self: flex-end !important;
	}
	.align-self-xl-center {
	-ms-flex-item-align: center !important;
	align-self: center !important;
	}
	.align-self-xl-baseline {
	-ms-flex-item-align: baseline !important;
	align-self: baseline !important;
	}
	.align-self-xl-stretch {
	-ms-flex-item-align: stretch !important;
	align-self: stretch !important;
	}
}

.float-left {
	float: left !important;
}

.float-right {
	float: right !important;
}

.float-none {
	float: none !important;
}

@media (min-width: 576px) {
	.float-sm-left {
	float: left !important;
	}
	.float-sm-right {
	float: right !important;
	}
	.float-sm-none {
	float: none !important;
	}
}

@media (min-width: 768px) {
	.float-md-left {
	float: left !important;
	}
	.float-md-right {
	float: right !important;
	}
	.float-md-none {
	float: none !important;
	}
}

@media (min-width: 992px) {
	.float-lg-left {
	float: left !important;
	}
	.float-lg-right {
	float: right !important;
	}
	.float-lg-none {
	float: none !important;
	}
}

@media (min-width: 1200px) {
	.float-xl-left {
	float: left !important;
	}
	.float-xl-right {
	float: right !important;
	}
	.float-xl-none {
	float: none !important;
	}
}

.position-static {
	position: static !important;
}

.position-relative {
	position: relative !important;
}

.position-absolute {
	position: absolute !important;
}

.position-fixed {
	position: fixed !important;
}

.position-sticky {
	position: -webkit-sticky !important;
	position: sticky !important;
}

.fixed-top {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 1030;
}

.fixed-bottom {
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1030;
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
	.sticky-top {
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	z-index: 1020;
	}
}

.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border: 0;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
	position: static;
	width: auto;
	height: auto;
	overflow: visible;
	clip: auto;
	white-space: normal;
}

.shadow-sm {
	-webkit-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
	box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.shadow {
	-webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.shadow-lg {
	-webkit-box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
	box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.shadow-none {
	-webkit-box-shadow: none !important;
	box-shadow: none !important;
}

.w-25 {
	width: 25% !important;
}

.w-50 {
	width: 50% !important;
}

.w-75 {
	width: 75% !important;
}

.w-100 {
	width: 100% !important;
}

.w-auto {
	width: auto !important;
}

.h-25 {
	height: 25% !important;
}

.h-50 {
	height: 50% !important;
}

.h-75 {
	height: 75% !important;
}

.h-100 {
	height: 100% !important;
}

.h-auto {
	height: auto !important;
}

.mw-100 {
	max-width: 100% !important;
}

.mh-100 {
	max-height: 100% !important;
}

.m-0 {
	margin: 0 !important;
}

.mt-0,
.my-0 {
	margin-top: 0 !important;
}

.mr-0,
.mx-0 {
	margin-right: 0 !important;
}

.mb-0,
.my-0 {
	margin-bottom: 0 !important;
}

.ml-0,
.mx-0 {
	margin-left: 0 !important;
}

.m-1 {
	margin: 0.25rem !important;
}

.mt-1,
.my-1 {
	margin-top: 0.25rem !important;
}

.mr-1,
.mx-1 {
	margin-right: 0.25rem !important;
}

.mb-1,
.my-1 {
	margin-bottom: 0.25rem !important;
}

.ml-1,
.mx-1 {
	margin-left: 0.25rem !important;
}

.m-2 {
	margin: 0.5rem !important;
}

.mt-2,
.my-2 {
	margin-top: 0.5rem !important;
}

.mr-2,
.mx-2 {
	margin-right: 0.5rem !important;
}

.mb-2,
.my-2 {
	margin-bottom: 0.5rem !important;
}

.ml-2,
.mx-2 {
	margin-left: 0.5rem !important;
}

.m-3 {
	margin: 1rem !important;
}

.mt-3,
.my-3 {
	margin-top: 1rem !important;
}

.mr-3,
.mx-3 {
	margin-right: 1rem !important;
}

.mb-3,
.my-3 {
	margin-bottom: 1rem !important;
}

.ml-3,
.mx-3 {
	margin-left: 1rem !important;
}

.m-4 {
	margin: 1.5rem !important;
}

.mt-4,
.my-4 {
	margin-top: 1.5rem !important;
}

.mr-4,
.mx-4 {
	margin-right: 1.5rem !important;
}

.mb-4,
.my-4 {
	margin-bottom: 1.5rem !important;
}

.ml-4,
.mx-4 {
	margin-left: 1.5rem !important;
}

.m-5 {
	margin: 3rem !important;
}

.mt-5,
.my-5 {
	margin-top: 3rem !important;
}

.mr-5,
.mx-5 {
	margin-right: 3rem !important;
}

.mb-5,
.my-5 {
	margin-bottom: 3rem !important;
}

.ml-5,
.mx-5 {
	margin-left: 3rem !important;
}

.p-0 {
	padding: 0 !important;
}

.pt-0,
.py-0 {
	padding-top: 0 !important;
}

.pr-0,
.px-0 {
	padding-right: 0 !important;
}

.pb-0,
.py-0 {
	padding-bottom: 0 !important;
}

.pl-0,
.px-0 {
	padding-left: 0 !important;
}

.p-1 {
	padding: 0.25rem !important;
}

.pt-1,
.py-1 {
	padding-top: 0.25rem !important;
}

.pr-1,
.px-1 {
	padding-right: 0.25rem !important;
}

.pb-1,
.py-1 {
	padding-bottom: 0.25rem !important;
}

.pl-1,
.px-1 {
	padding-left: 0.25rem !important;
}

.p-2 {
	padding: 0.5rem !important;
}

.pt-2,
.py-2 {
	padding-top: 0.5rem !important;
}

.pr-2,
.px-2 {
	padding-right: 0.5rem !important;
}

.pb-2,
.py-2 {
	padding-bottom: 0.5rem !important;
}

.pl-2,
.px-2 {
	padding-left: 0.5rem !important;
}

.p-3 {
	padding: 1rem !important;
}

.pt-3,
.py-3 {
	padding-top: 1rem !important;
}

.pr-3,
.px-3 {
	padding-right: 1rem !important;
}

.pb-3,
.py-3 {
	padding-bottom: 1rem !important;
}

.pl-3,
.px-3 {
	padding-left: 1rem !important;
}

.p-4 {
	padding: 1.5rem !important;
}

.pt-4,
.py-4 {
	padding-top: 1.5rem !important;
}

.pr-4,
.px-4 {
	padding-right: 1.5rem !important;
}

.pb-4,
.py-4 {
	padding-bottom: 1.5rem !important;
}

.pl-4,
.px-4 {
	padding-left: 1.5rem !important;
}

.p-5 {
	padding: 3rem !important;
}

.pt-5,
.py-5 {
	padding-top: 3rem !important;
}

.pr-5,
.px-5 {
	padding-right: 3rem !important;
}

.pb-5,
.py-5 {
	padding-bottom: 3rem !important;
}

.pl-5,
.px-5 {
	padding-left: 3rem !important;
}

.m-auto {
	margin: auto !important;
}

.mt-auto,
.my-auto {
	margin-top: auto !important;
}

.mr-auto,
.mx-auto {
	margin-right: auto !important;
}

.mb-auto,
.my-auto {
	margin-bottom: auto !important;
}

.ml-auto,
.mx-auto {
	margin-left: auto !important;
}

@media (min-width: 576px) {
	.m-sm-0 {
	margin: 0 !important;
	}
	.mt-sm-0,
	.my-sm-0 {
	margin-top: 0 !important;
	}
	.mr-sm-0,
	.mx-sm-0 {
	margin-right: 0 !important;
	}
	.mb-sm-0,
	.my-sm-0 {
	margin-bottom: 0 !important;
	}
	.ml-sm-0,
	.mx-sm-0 {
	margin-left: 0 !important;
	}
	.m-sm-1 {
	margin: 0.25rem !important;
	}
	.mt-sm-1,
	.my-sm-1 {
	margin-top: 0.25rem !important;
	}
	.mr-sm-1,
	.mx-sm-1 {
	margin-right: 0.25rem !important;
	}
	.mb-sm-1,
	.my-sm-1 {
	margin-bottom: 0.25rem !important;
	}
	.ml-sm-1,
	.mx-sm-1 {
	margin-left: 0.25rem !important;
	}
	.m-sm-2 {
	margin: 0.5rem !important;
	}
	.mt-sm-2,
	.my-sm-2 {
	margin-top: 0.5rem !important;
	}
	.mr-sm-2,
	.mx-sm-2 {
	margin-right: 0.5rem !important;
	}
	.mb-sm-2,
	.my-sm-2 {
	margin-bottom: 0.5rem !important;
	}
	.ml-sm-2,
	.mx-sm-2 {
	margin-left: 0.5rem !important;
	}
	.m-sm-3 {
	margin: 1rem !important;
	}
	.mt-sm-3,
	.my-sm-3 {
	margin-top: 1rem !important;
	}
	.mr-sm-3,
	.mx-sm-3 {
	margin-right: 1rem !important;
	}
	.mb-sm-3,
	.my-sm-3 {
	margin-bottom: 1rem !important;
	}
	.ml-sm-3,
	.mx-sm-3 {
	margin-left: 1rem !important;
	}
	.m-sm-4 {
	margin: 1.5rem !important;
	}
	.mt-sm-4,
	.my-sm-4 {
	margin-top: 1.5rem !important;
	}
	.mr-sm-4,
	.mx-sm-4 {
	margin-right: 1.5rem !important;
	}
	.mb-sm-4,
	.my-sm-4 {
	margin-bottom: 1.5rem !important;
	}
	.ml-sm-4,
	.mx-sm-4 {
	margin-left: 1.5rem !important;
	}
	.m-sm-5 {
	margin: 3rem !important;
	}
	.mt-sm-5,
	.my-sm-5 {
	margin-top: 3rem !important;
	}
	.mr-sm-5,
	.mx-sm-5 {
	margin-right: 3rem !important;
	}
	.mb-sm-5,
	.my-sm-5 {
	margin-bottom: 3rem !important;
	}
	.ml-sm-5,
	.mx-sm-5 {
	margin-left: 3rem !important;
	}
	.p-sm-0 {
	padding: 0 !important;
	}
	.pt-sm-0,
	.py-sm-0 {
	padding-top: 0 !important;
	}
	.pr-sm-0,
	.px-sm-0 {
	padding-right: 0 !important;
	}
	.pb-sm-0,
	.py-sm-0 {
	padding-bottom: 0 !important;
	}
	.pl-sm-0,
	.px-sm-0 {
	padding-left: 0 !important;
	}
	.p-sm-1 {
	padding: 0.25rem !important;
	}
	.pt-sm-1,
	.py-sm-1 {
	padding-top: 0.25rem !important;
	}
	.pr-sm-1,
	.px-sm-1 {
	padding-right: 0.25rem !important;
	}
	.pb-sm-1,
	.py-sm-1 {
	padding-bottom: 0.25rem !important;
	}
	.pl-sm-1,
	.px-sm-1 {
	padding-left: 0.25rem !important;
	}
	.p-sm-2 {
	padding: 0.5rem !important;
	}
	.pt-sm-2,
	.py-sm-2 {
	padding-top: 0.5rem !important;
	}
	.pr-sm-2,
	.px-sm-2 {
	padding-right: 0.5rem !important;
	}
	.pb-sm-2,
	.py-sm-2 {
	padding-bottom: 0.5rem !important;
	}
	.pl-sm-2,
	.px-sm-2 {
	padding-left: 0.5rem !important;
	}
	.p-sm-3 {
	padding: 1rem !important;
	}
	.pt-sm-3,
	.py-sm-3 {
	padding-top: 1rem !important;
	}
	.pr-sm-3,
	.px-sm-3 {
	padding-right: 1rem !important;
	}
	.pb-sm-3,
	.py-sm-3 {
	padding-bottom: 1rem !important;
	}
	.pl-sm-3,
	.px-sm-3 {
	padding-left: 1rem !important;
	}
	.p-sm-4 {
	padding: 1.5rem !important;
	}
	.pt-sm-4,
	.py-sm-4 {
	padding-top: 1.5rem !important;
	}
	.pr-sm-4,
	.px-sm-4 {
	padding-right: 1.5rem !important;
	}
	.pb-sm-4,
	.py-sm-4 {
	padding-bottom: 1.5rem !important;
	}
	.pl-sm-4,
	.px-sm-4 {
	padding-left: 1.5rem !important;
	}
	.p-sm-5 {
	padding: 3rem !important;
	}
	.pt-sm-5,
	.py-sm-5 {
	padding-top: 3rem !important;
	}
	.pr-sm-5,
	.px-sm-5 {
	padding-right: 3rem !important;
	}
	.pb-sm-5,
	.py-sm-5 {
	padding-bottom: 3rem !important;
	}
	.pl-sm-5,
	.px-sm-5 {
	padding-left: 3rem !important;
	}
	.m-sm-auto {
	margin: auto !important;
	}
	.mt-sm-auto,
	.my-sm-auto {
	margin-top: auto !important;
	}
	.mr-sm-auto,
	.mx-sm-auto {
	margin-right: auto !important;
	}
	.mb-sm-auto,
	.my-sm-auto {
	margin-bottom: auto !important;
	}
	.ml-sm-auto,
	.mx-sm-auto {
	margin-left: auto !important;
	}
}

@media (min-width: 768px) {
	.m-md-0 {
	margin: 0 !important;
	}
	.mt-md-0,
	.my-md-0 {
	margin-top: 0 !important;
	}
	.mr-md-0,
	.mx-md-0 {
	margin-right: 0 !important;
	}
	.mb-md-0,
	.my-md-0 {
	margin-bottom: 0 !important;
	}
	.ml-md-0,
	.mx-md-0 {
	margin-left: 0 !important;
	}
	.m-md-1 {
	margin: 0.25rem !important;
	}
	.mt-md-1,
	.my-md-1 {
	margin-top: 0.25rem !important;
	}
	.mr-md-1,
	.mx-md-1 {
	margin-right: 0.25rem !important;
	}
	.mb-md-1,
	.my-md-1 {
	margin-bottom: 0.25rem !important;
	}
	.ml-md-1,
	.mx-md-1 {
	margin-left: 0.25rem !important;
	}
	.m-md-2 {
	margin: 0.5rem !important;
	}
	.mt-md-2,
	.my-md-2 {
	margin-top: 0.5rem !important;
	}
	.mr-md-2,
	.mx-md-2 {
	margin-right: 0.5rem !important;
	}
	.mb-md-2,
	.my-md-2 {
	margin-bottom: 0.5rem !important;
	}
	.ml-md-2,
	.mx-md-2 {
	margin-left: 0.5rem !important;
	}
	.m-md-3 {
	margin: 1rem !important;
	}
	.mt-md-3,
	.my-md-3 {
	margin-top: 1rem !important;
	}
	.mr-md-3,
	.mx-md-3 {
	margin-right: 1rem !important;
	}
	.mb-md-3,
	.my-md-3 {
	margin-bottom: 1rem !important;
	}
	.ml-md-3,
	.mx-md-3 {
	margin-left: 1rem !important;
	}
	.m-md-4 {
	margin: 1.5rem !important;
	}
	.mt-md-4,
	.my-md-4 {
	margin-top: 1.5rem !important;
	}
	.mr-md-4,
	.mx-md-4 {
	margin-right: 1.5rem !important;
	}
	.mb-md-4,
	.my-md-4 {
	margin-bottom: 1.5rem !important;
	}
	.ml-md-4,
	.mx-md-4 {
	margin-left: 1.5rem !important;
	}
	.m-md-5 {
	margin: 3rem !important;
	}
	.mt-md-5,
	.my-md-5 {
	margin-top: 3rem !important;
	}
	.mr-md-5,
	.mx-md-5 {
	margin-right: 3rem !important;
	}
	.mb-md-5,
	.my-md-5 {
	margin-bottom: 3rem !important;
	}
	.ml-md-5,
	.mx-md-5 {
	margin-left: 3rem !important;
	}
	.p-md-0 {
	padding: 0 !important;
	}
	.pt-md-0,
	.py-md-0 {
	padding-top: 0 !important;
	}
	.pr-md-0,
	.px-md-0 {
	padding-right: 0 !important;
	}
	.pb-md-0,
	.py-md-0 {
	padding-bottom: 0 !important;
	}
	.pl-md-0,
	.px-md-0 {
	padding-left: 0 !important;
	}
	.p-md-1 {
	padding: 0.25rem !important;
	}
	.pt-md-1,
	.py-md-1 {
	padding-top: 0.25rem !important;
	}
	.pr-md-1,
	.px-md-1 {
	padding-right: 0.25rem !important;
	}
	.pb-md-1,
	.py-md-1 {
	padding-bottom: 0.25rem !important;
	}
	.pl-md-1,
	.px-md-1 {
	padding-left: 0.25rem !important;
	}
	.p-md-2 {
	padding: 0.5rem !important;
	}
	.pt-md-2,
	.py-md-2 {
	padding-top: 0.5rem !important;
	}
	.pr-md-2,
	.px-md-2 {
	padding-right: 0.5rem !important;
	}
	.pb-md-2,
	.py-md-2 {
	padding-bottom: 0.5rem !important;
	}
	.pl-md-2,
	.px-md-2 {
	padding-left: 0.5rem !important;
	}
	.p-md-3 {
	padding: 1rem !important;
	}
	.pt-md-3,
	.py-md-3 {
	padding-top: 1rem !important;
	}
	.pr-md-3,
	.px-md-3 {
	padding-right: 1rem !important;
	}
	.pb-md-3,
	.py-md-3 {
	padding-bottom: 1rem !important;
	}
	.pl-md-3,
	.px-md-3 {
	padding-left: 1rem !important;
	}
	.p-md-4 {
	padding: 1.5rem !important;
	}
	.pt-md-4,
	.py-md-4 {
	padding-top: 1.5rem !important;
	}
	.pr-md-4,
	.px-md-4 {
	padding-right: 1.5rem !important;
	}
	.pb-md-4,
	.py-md-4 {
	padding-bottom: 1.5rem !important;
	}
	.pl-md-4,
	.px-md-4 {
	padding-left: 1.5rem !important;
	}
	.p-md-5 {
	padding: 3rem !important;
	}
	.pt-md-5,
	.py-md-5 {
	padding-top: 3rem !important;
	}
	.pr-md-5,
	.px-md-5 {
	padding-right: 3rem !important;
	}
	.pb-md-5,
	.py-md-5 {
	padding-bottom: 3rem !important;
	}
	.pl-md-5,
	.px-md-5 {
	padding-left: 3rem !important;
	}
	.m-md-auto {
	margin: auto !important;
	}
	.mt-md-auto,
	.my-md-auto {
	margin-top: auto !important;
	}
	.mr-md-auto,
	.mx-md-auto {
	margin-right: auto !important;
	}
	.mb-md-auto,
	.my-md-auto {
	margin-bottom: auto !important;
	}
	.ml-md-auto,
	.mx-md-auto {
	margin-left: auto !important;
	}
}

@media (min-width: 992px) {
	.m-lg-0 {
	margin: 0 !important;
	}
	.mt-lg-0,
	.my-lg-0 {
	margin-top: 0 !important;
	}
	.mr-lg-0,
	.mx-lg-0 {
	margin-right: 0 !important;
	}
	.mb-lg-0,
	.my-lg-0 {
	margin-bottom: 0 !important;
	}
	.ml-lg-0,
	.mx-lg-0 {
	margin-left: 0 !important;
	}
	.m-lg-1 {
	margin: 0.25rem !important;
	}
	.mt-lg-1,
	.my-lg-1 {
	margin-top: 0.25rem !important;
	}
	.mr-lg-1,
	.mx-lg-1 {
	margin-right: 0.25rem !important;
	}
	.mb-lg-1,
	.my-lg-1 {
	margin-bottom: 0.25rem !important;
	}
	.ml-lg-1,
	.mx-lg-1 {
	margin-left: 0.25rem !important;
	}
	.m-lg-2 {
	margin: 0.5rem !important;
	}
	.mt-lg-2,
	.my-lg-2 {
	margin-top: 0.5rem !important;
	}
	.mr-lg-2,
	.mx-lg-2 {
	margin-right: 0.5rem !important;
	}
	.mb-lg-2,
	.my-lg-2 {
	margin-bottom: 0.5rem !important;
	}
	.ml-lg-2,
	.mx-lg-2 {
	margin-left: 0.5rem !important;
	}
	.m-lg-3 {
	margin: 1rem !important;
	}
	.mt-lg-3,
	.my-lg-3 {
	margin-top: 1rem !important;
	}
	.mr-lg-3,
	.mx-lg-3 {
	margin-right: 1rem !important;
	}
	.mb-lg-3,
	.my-lg-3 {
	margin-bottom: 1rem !important;
	}
	.ml-lg-3,
	.mx-lg-3 {
	margin-left: 1rem !important;
	}
	.m-lg-4 {
	margin: 1.5rem !important;
	}
	.mt-lg-4,
	.my-lg-4 {
	margin-top: 1.5rem !important;
	}
	.mr-lg-4,
	.mx-lg-4 {
	margin-right: 1.5rem !important;
	}
	.mb-lg-4,
	.my-lg-4 {
	margin-bottom: 1.5rem !important;
	}
	.ml-lg-4,
	.mx-lg-4 {
	margin-left: 1.5rem !important;
	}
	.m-lg-5 {
	margin: 3rem !important;
	}
	.mt-lg-5,
	.my-lg-5 {
	margin-top: 3rem !important;
	}
	.mr-lg-5,
	.mx-lg-5 {
	margin-right: 3rem !important;
	}
	.mb-lg-5,
	.my-lg-5 {
	margin-bottom: 3rem !important;
	}
	.ml-lg-5,
	.mx-lg-5 {
	margin-left: 3rem !important;
	}
	.p-lg-0 {
	padding: 0 !important;
	}
	.pt-lg-0,
	.py-lg-0 {
	padding-top: 0 !important;
	}
	.pr-lg-0,
	.px-lg-0 {
	padding-right: 0 !important;
	}
	.pb-lg-0,
	.py-lg-0 {
	padding-bottom: 0 !important;
	}
	.pl-lg-0,
	.px-lg-0 {
	padding-left: 0 !important;
	}
	.p-lg-1 {
	padding: 0.25rem !important;
	}
	.pt-lg-1,
	.py-lg-1 {
	padding-top: 0.25rem !important;
	}
	.pr-lg-1,
	.px-lg-1 {
	padding-right: 0.25rem !important;
	}
	.pb-lg-1,
	.py-lg-1 {
	padding-bottom: 0.25rem !important;
	}
	.pl-lg-1,
	.px-lg-1 {
	padding-left: 0.25rem !important;
	}
	.p-lg-2 {
	padding: 0.5rem !important;
	}
	.pt-lg-2,
	.py-lg-2 {
	padding-top: 0.5rem !important;
	}
	.pr-lg-2,
	.px-lg-2 {
	padding-right: 0.5rem !important;
	}
	.pb-lg-2,
	.py-lg-2 {
	padding-bottom: 0.5rem !important;
	}
	.pl-lg-2,
	.px-lg-2 {
	padding-left: 0.5rem !important;
	}
	.p-lg-3 {
	padding: 1rem !important;
	}
	.pt-lg-3,
	.py-lg-3 {
	padding-top: 1rem !important;
	}
	.pr-lg-3,
	.px-lg-3 {
	padding-right: 1rem !important;
	}
	.pb-lg-3,
	.py-lg-3 {
	padding-bottom: 1rem !important;
	}
	.pl-lg-3,
	.px-lg-3 {
	padding-left: 1rem !important;
	}
	.p-lg-4 {
	padding: 1.5rem !important;
	}
	.pt-lg-4,
	.py-lg-4 {
	padding-top: 1.5rem !important;
	}
	.pr-lg-4,
	.px-lg-4 {
	padding-right: 1.5rem !important;
	}
	.pb-lg-4,
	.py-lg-4 {
	padding-bottom: 1.5rem !important;
	}
	.pl-lg-4,
	.px-lg-4 {
	padding-left: 1.5rem !important;
	}
	.p-lg-5 {
	padding: 3rem !important;
	}
	.pt-lg-5,
	.py-lg-5 {
	padding-top: 3rem !important;
	}
	.pr-lg-5,
	.px-lg-5 {
	padding-right: 3rem !important;
	}
	.pb-lg-5,
	.py-lg-5 {
	padding-bottom: 3rem !important;
	}
	.pl-lg-5,
	.px-lg-5 {
	padding-left: 3rem !important;
	}
	.m-lg-auto {
	margin: auto !important;
	}
	.mt-lg-auto,
	.my-lg-auto {
	margin-top: auto !important;
	}
	.mr-lg-auto,
	.mx-lg-auto {
	margin-right: auto !important;
	}
	.mb-lg-auto,
	.my-lg-auto {
	margin-bottom: auto !important;
	}
	.ml-lg-auto,
	.mx-lg-auto {
	margin-left: auto !important;
	}
}

@media (min-width: 1200px) {
	.m-xl-0 {
	margin: 0 !important;
	}
	.mt-xl-0,
	.my-xl-0 {
	margin-top: 0 !important;
	}
	.mr-xl-0,
	.mx-xl-0 {
	margin-right: 0 !important;
	}
	.mb-xl-0,
	.my-xl-0 {
	margin-bottom: 0 !important;
	}
	.ml-xl-0,
	.mx-xl-0 {
	margin-left: 0 !important;
	}
	.m-xl-1 {
	margin: 0.25rem !important;
	}
	.mt-xl-1,
	.my-xl-1 {
	margin-top: 0.25rem !important;
	}
	.mr-xl-1,
	.mx-xl-1 {
	margin-right: 0.25rem !important;
	}
	.mb-xl-1,
	.my-xl-1 {
	margin-bottom: 0.25rem !important;
	}
	.ml-xl-1,
	.mx-xl-1 {
	margin-left: 0.25rem !important;
	}
	.m-xl-2 {
	margin: 0.5rem !important;
	}
	.mt-xl-2,
	.my-xl-2 {
	margin-top: 0.5rem !important;
	}
	.mr-xl-2,
	.mx-xl-2 {
	margin-right: 0.5rem !important;
	}
	.mb-xl-2,
	.my-xl-2 {
	margin-bottom: 0.5rem !important;
	}
	.ml-xl-2,
	.mx-xl-2 {
	margin-left: 0.5rem !important;
	}
	.m-xl-3 {
	margin: 1rem !important;
	}
	.mt-xl-3,
	.my-xl-3 {
	margin-top: 1rem !important;
	}
	.mr-xl-3,
	.mx-xl-3 {
	margin-right: 1rem !important;
	}
	.mb-xl-3,
	.my-xl-3 {
	margin-bottom: 1rem !important;
	}
	.ml-xl-3,
	.mx-xl-3 {
	margin-left: 1rem !important;
	}
	.m-xl-4 {
	margin: 1.5rem !important;
	}
	.mt-xl-4,
	.my-xl-4 {
	margin-top: 1.5rem !important;
	}
	.mr-xl-4,
	.mx-xl-4 {
	margin-right: 1.5rem !important;
	}
	.mb-xl-4,
	.my-xl-4 {
	margin-bottom: 1.5rem !important;
	}
	.ml-xl-4,
	.mx-xl-4 {
	margin-left: 1.5rem !important;
	}
	.m-xl-5 {
	margin: 3rem !important;
	}
	.mt-xl-5,
	.my-xl-5 {
	margin-top: 3rem !important;
	}
	.mr-xl-5,
	.mx-xl-5 {
	margin-right: 3rem !important;
	}
	.mb-xl-5,
	.my-xl-5 {
	margin-bottom: 3rem !important;
	}
	.ml-xl-5,
	.mx-xl-5 {
	margin-left: 3rem !important;
	}
	.p-xl-0 {
	padding: 0 !important;
	}
	.pt-xl-0,
	.py-xl-0 {
	padding-top: 0 !important;
	}
	.pr-xl-0,
	.px-xl-0 {
	padding-right: 0 !important;
	}
	.pb-xl-0,
	.py-xl-0 {
	padding-bottom: 0 !important;
	}
	.pl-xl-0,
	.px-xl-0 {
	padding-left: 0 !important;
	}
	.p-xl-1 {
	padding: 0.25rem !important;
	}
	.pt-xl-1,
	.py-xl-1 {
	padding-top: 0.25rem !important;
	}
	.pr-xl-1,
	.px-xl-1 {
	padding-right: 0.25rem !important;
	}
	.pb-xl-1,
	.py-xl-1 {
	padding-bottom: 0.25rem !important;
	}
	.pl-xl-1,
	.px-xl-1 {
	padding-left: 0.25rem !important;
	}
	.p-xl-2 {
	padding: 0.5rem !important;
	}
	.pt-xl-2,
	.py-xl-2 {
	padding-top: 0.5rem !important;
	}
	.pr-xl-2,
	.px-xl-2 {
	padding-right: 0.5rem !important;
	}
	.pb-xl-2,
	.py-xl-2 {
	padding-bottom: 0.5rem !important;
	}
	.pl-xl-2,
	.px-xl-2 {
	padding-left: 0.5rem !important;
	}
	.p-xl-3 {
	padding: 1rem !important;
	}
	.pt-xl-3,
	.py-xl-3 {
	padding-top: 1rem !important;
	}
	.pr-xl-3,
	.px-xl-3 {
	padding-right: 1rem !important;
	}
	.pb-xl-3,
	.py-xl-3 {
	padding-bottom: 1rem !important;
	}
	.pl-xl-3,
	.px-xl-3 {
	padding-left: 1rem !important;
	}
	.p-xl-4 {
	padding: 1.5rem !important;
	}
	.pt-xl-4,
	.py-xl-4 {
	padding-top: 1.5rem !important;
	}
	.pr-xl-4,
	.px-xl-4 {
	padding-right: 1.5rem !important;
	}
	.pb-xl-4,
	.py-xl-4 {
	padding-bottom: 1.5rem !important;
	}
	.pl-xl-4,
	.px-xl-4 {
	padding-left: 1.5rem !important;
	}
	.p-xl-5 {
	padding: 3rem !important;
	}
	.pt-xl-5,
	.py-xl-5 {
	padding-top: 3rem !important;
	}
	.pr-xl-5,
	.px-xl-5 {
	padding-right: 3rem !important;
	}
	.pb-xl-5,
	.py-xl-5 {
	padding-bottom: 3rem !important;
	}
	.pl-xl-5,
	.px-xl-5 {
	padding-left: 3rem !important;
	}
	.m-xl-auto {
	margin: auto !important;
	}
	.mt-xl-auto,
	.my-xl-auto {
	margin-top: auto !important;
	}
	.mr-xl-auto,
	.mx-xl-auto {
	margin-right: auto !important;
	}
	.mb-xl-auto,
	.my-xl-auto {
	margin-bottom: auto !important;
	}
	.ml-xl-auto,
	.mx-xl-auto {
	margin-left: auto !important;
	}
}

.text-monospace {
	font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.text-justify {
	text-align: justify !important;
}

.text-nowrap {
	white-space: nowrap !important;
}

.text-truncate {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.text-left {
	text-align: left !important;
}

.text-right {
	text-align: right !important;
}

.text-center {
	text-align: center !important;
}

@media (min-width: 576px) {
	.text-sm-left {
	text-align: left !important;
	}
	.text-sm-right {
	text-align: right !important;
	}
	.text-sm-center {
	text-align: center !important;
	}
}

@media (min-width: 768px) {
	.text-md-left {
	text-align: left !important;
	}
	.text-md-right {
	text-align: right !important;
	}
	.text-md-center {
	text-align: center !important;
	}
}

@media (min-width: 992px) {
	.text-lg-left {
	text-align: left !important;
	}
	.text-lg-right {
	text-align: right !important;
	}
	.text-lg-center {
	text-align: center !important;
	}
}

@media (min-width: 1200px) {
	.text-xl-left {
	text-align: left !important;
	}
	.text-xl-right {
	text-align: right !important;
	}
	.text-xl-center {
	text-align: center !important;
	}
}

.text-lowercase {
	text-transform: lowercase !important;
}

.text-uppercase {
	text-transform: uppercase !important;
}

.text-capitalize {
	text-transform: capitalize !important;
}

.font-weight-light {
	font-weight: 300 !important;
}

.font-weight-normal {
	font-weight: 400 !important;
}

.font-weight-bold {
	font-weight: 700 !important;
}

.font-italic {
	font-style: italic !important;
}

.text-white {
	color: #fff !important;
}

.text-primary {
	color: #2196F3 !important;
}

a.text-primary:hover, a.text-primary:focus {
	color: #0c7cd5 !important;
}

.text-secondary {
	color: #fff !important;
}

a.text-secondary:hover, a.text-secondary:focus {
	color: #e6e5e5 !important;
}

.text-success {
	color: #4CAF50 !important;
}

a.text-success:hover, a.text-success:focus {
	color: #3d8b40 !important;
}

.text-info {
	color: #9C27B0 !important;
}

a.text-info:hover, a.text-info:focus {
	color: #771e86 !important;
}

.text-warning {
	color: #ff9800 !important;
}

a.text-warning:hover, a.text-warning:focus {
	color: #cc7a00 !important;
}

.text-danger {
	color: #e51c23 !important;
}

a.text-danger:hover, a.text-danger:focus {
	color: #b9151b !important;
}

.text-light {
	color: #fff !important;
}

a.text-light:hover, a.text-light:focus {
	color: #e6e5e5 !important;
}

.text-dark {
	color: #222 !important;
}

a.text-dark:hover, a.text-dark:focus {
	color: #090808 !important;
}

.text-body {
	color: #444 !important;
}

.text-muted {
	color: #666 !important;
}

.text-black-50 {
	color: rgba(0, 0, 0, 0.5) !important;
}

.text-white-50 {
	color: rgba(255, 255, 255, 0.5) !important;
}

.text-hide {
	font: 0/0 a;
	color: transparent;
	text-shadow: none;
	background-color: transparent;
	border: 0;
}

.visible {
	visibility: visible !important;
}

.invisible {
	visibility: hidden !important;
}

@media print {
*,
*::before,
*::after {
	text-shadow: none !important;
	-webkit-box-shadow: none !important;
	box-shadow: none !important;
	}
	a:not(.btn) {
	text-decoration: underline;
	}
	abbr[title]::after {
	content: " (" attr(title) ")";
	}
	pre {
	white-space: pre-wrap !important;
	}
	pre,
	blockquote {
	border: 1px solid #bbb;
	page-break-inside: avoid;
	}
	thead {
	display: table-header-group;
	}
	tr,
	img {
	page-break-inside: avoid;
	}
	p,
	h2,
	h3 {
	orphans: 3;
	widows: 3;
	}
	h2,
	h3 {
	page-break-after: avoid;
	}
	@page {
	size: a3;
	}
	body {
	min-width: 992px !important;
	}
	.container {
	min-width: 992px !important;
	}
	.navbar {
	display: none;
	}
	.badge {
	border: 1px solid #000;
	}
	.table {
	border-collapse: collapse !important;
	}
	.table td,
	.table th {
	background-color: #fff !important;
	}
	.table-bordered th,
	.table-bordered td {
	border: 1px solid #dee2e6 !important;
	}
	.table-dark {
	color: inherit;
	}
	.table-dark th,
	.table-dark td,
	.table-dark thead th,
	.table-dark tbody + tbody {
	border-color: #dee2e6;
	}
	.table .thead-dark th {
	color: inherit;
	border-color: #dee2e6;
	}
}

.navbar {
	border: none;
	-webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.navbar-brand {
	font-size: 24px;
}

.navbar-nav .nav-link {
	padding-top: 0.9rem;
	padding-bottom: 0.9rem;
}

.navbar.bg-dark input[type=text],
.navbar.bg-dark input[type=password], .navbar.bg-primary input[type=text],
.navbar.bg-primary input[type=password] {
	color: #fff;
	-webkit-box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.5);
	box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.5);
}

.navbar.bg-dark input[type=text]:focus,
.navbar.bg-dark input[type=password]:focus, .navbar.bg-primary input[type=text]:focus,
.navbar.bg-primary input[type=password]:focus {
	-webkit-box-shadow: inset 0 -2px 0 #fff;
	box-shadow: inset 0 -2px 0 #fff;
}

.navbar.bg-dark input[type=text]::-webkit-input-placeholder,
.navbar.bg-dark input[type=password]::-webkit-input-placeholder, .navbar.bg-primary input[type=text]::-webkit-input-placeholder,
.navbar.bg-primary input[type=password]::-webkit-input-placeholder {
	color: rgba(255, 255, 255, 0.5);
}

.navbar.bg-dark input[type=text]:-ms-input-placeholder,
.navbar.bg-dark input[type=password]:-ms-input-placeholder, .navbar.bg-primary input[type=text]:-ms-input-placeholder,
.navbar.bg-primary input[type=password]:-ms-input-placeholder {
	color: rgba(255, 255, 255, 0.5);
}

.navbar.bg-dark input[type=text]::-ms-input-placeholder,
.navbar.bg-dark input[type=password]::-ms-input-placeholder, .navbar.bg-primary input[type=text]::-ms-input-placeholder,
.navbar.bg-primary input[type=password]::-ms-input-placeholder {
	color: rgba(255, 255, 255, 0.5);
}

.navbar.bg-dark input[type=text]::placeholder,
.navbar.bg-dark input[type=password]::placeholder, .navbar.bg-primary input[type=text]::placeholder,
.navbar.bg-primary input[type=password]::placeholder {
	color: rgba(255, 255, 255, 0.5);
}

.btn-primary {
	position: relative;
}

.btn-primary:focus {
	background-color: #2196F3;
	-webkit-box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
	box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
}

.btn-primary:hover, .btn-primary:active:hover {
	background-color: #0d87e9;
}

.btn-primary:active {
	-webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.btn-primary:after {
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	margin-left: 0;
	background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
	background-repeat: no-repeat;
	background-size: 1000% 1000%;
	background-position: 50%;
	border: none;
	opacity: 0;
	pointer-events: none;
	-webkit-transition: background .5s, opacity 1s;
	transition: background .5s, opacity 1s;
}

.btn-primary:active:after {
	background-size: 0 0;
	opacity: .2;
	-webkit-transition: 0s;
	transition: 0s;
}

.btn-primary.disabled:after, .btn-primary[disabled]:after {
	display: none;
}

.btn-outline-primary {
	position: relative;
}

.btn-outline-primary:after {
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	margin-left: 0;
	background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
	background-repeat: no-repeat;
	background-size: 1000% 1000%;
	background-position: 50%;
	border: none;
	opacity: 0;
	pointer-events: none;
	-webkit-transition: background .5s, opacity 1s;
	transition: background .5s, opacity 1s;
}

.btn-outline-primary:active:after {
	background-size: 0 0;
	opacity: .2;
	-webkit-transition: 0s;
	transition: 0s;
}

.btn-outline-primary.disabled:after, .btn-outline-primary[disabled]:after {
	display: none;
}

.btn-secondary {
	position: relative;
}

.btn-secondary:focus {
	background-color: #fff;
	-webkit-box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
	box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
}

.btn-secondary:hover, .btn-secondary:active:hover {
	background-color: #f0f0f0;
}

.btn-secondary:active {
	-webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.btn-secondary:after {
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	margin-left: 0;
	background-image: radial-gradient(circle, #bbb 10%, transparent 10.01%);
	background-repeat: no-repeat;
	background-size: 1000% 1000%;
	background-position: 50%;
	border: none;
	opacity: 0;
	pointer-events: none;
	-webkit-transition: background .5s, opacity 1s;
	transition: background .5s, opacity 1s;
}

.btn-secondary:active:after {
	background-size: 0 0;
	opacity: .2;
	-webkit-transition: 0s;
	transition: 0s;
}

.btn-secondary.disabled:after, .btn-secondary[disabled]:after {
	display: none;
}

.btn-outline-secondary {
	position: relative;
}

.btn-outline-secondary:after {
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	margin-left: 0;
	background-image: radial-gradient(circle, #bbb 10%, transparent 10.01%);
	background-repeat: no-repeat;
	background-size: 1000% 1000%;
	background-position: 50%;
	border: none;
	opacity: 0;
	pointer-events: none;
	-webkit-transition: background .5s, opacity 1s;
	transition: background .5s, opacity 1s;
}

.btn-outline-secondary:active:after {
	background-size: 0 0;
	opacity: .2;
	-webkit-transition: 0s;
	transition: 0s;
}

.btn-outline-secondary.disabled:after, .btn-outline-secondary[disabled]:after {
	display: none;
}

.btn-success {
	position: relative;
}

.btn-success:focus {
	background-color: #4CAF50;
	-webkit-box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
	box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
}

.btn-success:hover, .btn-success:active:hover {
	background-color: #439a46;
}

.btn-success:active {
	-webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.btn-success:after {
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	margin-left: 0;
	background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
	background-repeat: no-repeat;
	background-size: 1000% 1000%;
	background-position: 50%;
	border: none;
	opacity: 0;
	pointer-events: none;
	-webkit-transition: background .5s, opacity 1s;
	transition: background .5s, opacity 1s;
}

.btn-success:active:after {
	background-size: 0 0;
	opacity: .2;
	-webkit-transition: 0s;
	transition: 0s;
}

.btn-success.disabled:after, .btn-success[disabled]:after {
	display: none;
}

.btn-outline-success {
	position: relative;
}

.btn-outline-success:after {
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	margin-left: 0;
	background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
	background-repeat: no-repeat;
	background-size: 1000% 1000%;
	background-position: 50%;
	border: none;
	opacity: 0;
	pointer-events: none;
	-webkit-transition: background .5s, opacity 1s;
	transition: background .5s, opacity 1s;
}

.btn-outline-success:active:after {
	background-size: 0 0;
	opacity: .2;
	-webkit-transition: 0s;
	transition: 0s;
}

.btn-outline-success.disabled:after, .btn-outline-success[disabled]:after {
	display: none;
}

.btn-info {
	position: relative;
}

.btn-info:focus {
	background-color: #9C27B0;
	-webkit-box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
	box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
}

.btn-info:hover, .btn-info:active:hover {
	background-color: #862197;
}

.btn-info:active {
	-webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.btn-info:after {
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	margin-left: 0;
	background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
	background-repeat: no-repeat;
	background-size: 1000% 1000%;
	background-position: 50%;
	border: none;
	opacity: 0;
	pointer-events: none;
	-webkit-transition: background .5s, opacity 1s;
	transition: background .5s, opacity 1s;
}

.btn-info:active:after {
	background-size: 0 0;
	opacity: .2;
	-webkit-transition: 0s;
	transition: 0s;
}

.btn-info.disabled:after, .btn-info[disabled]:after {
	display: none;
}

.btn-outline-info {
	position: relative;
}

.btn-outline-info:after {
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	margin-left: 0;
	background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
	background-repeat: no-repeat;
	background-size: 1000% 1000%;
	background-position: 50%;
	border: none;
	opacity: 0;
	pointer-events: none;
	-webkit-transition: background .5s, opacity 1s;
	transition: background .5s, opacity 1s;
}

.btn-outline-info:active:after {
	background-size: 0 0;
	opacity: .2;
	-webkit-transition: 0s;
	transition: 0s;
}

.btn-outline-info.disabled:after, .btn-outline-info[disabled]:after {
	display: none;
}

.btn-warning {
	position: relative;
}

.btn-warning:focus {
	background-color: #ff9800;
	-webkit-box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
	box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
}

.btn-warning:hover, .btn-warning:active:hover {
	background-color: #e08600;
}

.btn-warning:active {
	-webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.btn-warning:after {
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	margin-left: 0;
	background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
	background-repeat: no-repeat;
	background-size: 1000% 1000%;
	background-position: 50%;
	border: none;
	opacity: 0;
	pointer-events: none;
	-webkit-transition: background .5s, opacity 1s;
	transition: background .5s, opacity 1s;
}

.btn-warning:active:after {
	background-size: 0 0;
	opacity: .2;
	-webkit-transition: 0s;
	transition: 0s;
}

.btn-warning.disabled:after, .btn-warning[disabled]:after {
	display: none;
}

.btn-outline-warning {
	position: relative;
}

.btn-outline-warning:after {
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	margin-left: 0;
	background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
	background-repeat: no-repeat;
	background-size: 1000% 1000%;
	background-position: 50%;
	border: none;
	opacity: 0;
	pointer-events: none;
	-webkit-transition: background .5s, opacity 1s;
	transition: background .5s, opacity 1s;
}

.btn-outline-warning:active:after {
	background-size: 0 0;
	opacity: .2;
	-webkit-transition: 0s;
	transition: 0s;
}

.btn-outline-warning.disabled:after, .btn-outline-warning[disabled]:after {
	display: none;
}

.btn-danger {
	position: relative;
}

.btn-danger:focus {
	background-color: #e51c23;
	-webkit-box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
	box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
}

.btn-danger:hover, .btn-danger:active:hover {
	background-color: #cb171e;
}

.btn-danger:active {
	-webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.btn-danger:after {
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	margin-left: 0;
	background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
	background-repeat: no-repeat;
	background-size: 1000% 1000%;
	background-position: 50%;
	border: none;
	opacity: 0;
	pointer-events: none;
	-webkit-transition: background .5s, opacity 1s;
	transition: background .5s, opacity 1s;
}

.btn-danger:active:after {
	background-size: 0 0;
	opacity: .2;
	-webkit-transition: 0s;
	transition: 0s;
}

.btn-danger.disabled:after, .btn-danger[disabled]:after {
	display: none;
}

.btn-outline-danger {
	position: relative;
}

.btn-outline-danger:after {
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	margin-left: 0;
	background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
	background-repeat: no-repeat;
	background-size: 1000% 1000%;
	background-position: 50%;
	border: none;
	opacity: 0;
	pointer-events: none;
	-webkit-transition: background .5s, opacity 1s;
	transition: background .5s, opacity 1s;
}

.btn-outline-danger:active:after {
	background-size: 0 0;
	opacity: .2;
	-webkit-transition: 0s;
	transition: 0s;
}

.btn-outline-danger.disabled:after, .btn-outline-danger[disabled]:after {
	display: none;
}

.btn-dark {
	position: relative;
}

.btn-dark:focus {
	background-color: #222;
	-webkit-box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
	box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
}

.btn-dark:hover, .btn-dark:active:hover {
	background-color: #131313;
}

.btn-dark:active {
	-webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.btn-dark:after {
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	margin-left: 0;
	background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
	background-repeat: no-repeat;
	background-size: 1000% 1000%;
	background-position: 50%;
	border: none;
	opacity: 0;
	pointer-events: none;
	-webkit-transition: background .5s, opacity 1s;
	transition: background .5s, opacity 1s;
}

.btn-dark:active:after {
	background-size: 0 0;
	opacity: .2;
	-webkit-transition: 0s;
	transition: 0s;
}

.btn-dark.disabled:after, .btn-dark[disabled]:after {
	display: none;
}

.btn-outline-dark {
	position: relative;
}

.btn-outline-dark:after {
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	margin-left: 0;
	background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
	background-repeat: no-repeat;
	background-size: 1000% 1000%;
	background-position: 50%;
	border: none;
	opacity: 0;
	pointer-events: none;
	-webkit-transition: background .5s, opacity 1s;
	transition: background .5s, opacity 1s;
}

.btn-outline-dark:active:after {
	background-size: 0 0;
	opacity: .2;
	-webkit-transition: 0s;
	transition: 0s;
}

.btn-outline-dark.disabled:after, .btn-outline-dark[disabled]:after {
	display: none;
}

.btn-light {
	position: relative;
}

.btn-light:focus {
	background-color: #fff;
	-webkit-box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
	box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
}

.btn-light:hover, .btn-light:active:hover {
	background-color: #f0f0f0;
}

.btn-light:active {
	-webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.btn-light:after {
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	margin-left: 0;
	background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
	background-repeat: no-repeat;
	background-size: 1000% 1000%;
	background-position: 50%;
	border: none;
	opacity: 0;
	pointer-events: none;
	-webkit-transition: background .5s, opacity 1s;
	transition: background .5s, opacity 1s;
}

.btn-light:active:after {
	background-size: 0 0;
	opacity: .2;
	-webkit-transition: 0s;
	transition: 0s;
}

.btn-light.disabled:after, .btn-light[disabled]:after {
	display: none;
}

.btn-outline-light {
	position: relative;
}

.btn-outline-light:after {
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	margin-left: 0;
	background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
	background-repeat: no-repeat;
	background-size: 1000% 1000%;
	background-position: 50%;
	border: none;
	opacity: 0;
	pointer-events: none;
	-webkit-transition: background .5s, opacity 1s;
	transition: background .5s, opacity 1s;
}

.btn-outline-light:active:after {
	background-size: 0 0;
	opacity: .2;
	-webkit-transition: 0s;
	transition: 0s;
}

.btn-outline-light.disabled:after, .btn-outline-light[disabled]:after {
	display: none;
}

.btn {
	text-transform: uppercase;
	border: none;
	-webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
	-webkit-transition: all 0.4s;
	transition: all 0.4s;
}

.btn-link {
	-webkit-box-shadow: none;
	box-shadow: none;
	color: #2196F3;
}

.btn-link:hover, .btn-link:focus {
	-webkit-box-shadow: none;
	box-shadow: none;
	color: #0a6ebd;
	text-decoration: underline;
}

.btn-link.disabled:hover, .btn-link.disabled:active:hover, .btn-link[disabled]:hover, .btn-link[disabled]:active:hover,
fieldset[disabled] .btn-link:hover,
fieldset[disabled] .btn-link:active:hover {
	color: #666;
	text-decoration: none;
}

.btn-secondary.disabled, .btn-secondary[disabled],
fieldset[disabled] .btn-secondary {
	background-color: rgba(0, 0, 0, 0.1);
	color: rgba(0, 0, 0, 0.4);
	opacity: 1;
}

.btn-secondary.disabled:hover, .btn-secondary.disabled:focus, .btn-secondary[disabled]:hover, .btn-secondary[disabled]:focus,
fieldset[disabled] .btn-secondary:hover,
fieldset[disabled] .btn-secondary:focus {
	background-color: rgba(0, 0, 0, 0.1);
}

.btn-outline-secondary {
	border-color: #eee;
	color: #dee2e6;
}

.btn-warning {
	color: #fff;
}

.btn.dropdown-toggle::before {
	display: inline-block;
	width: 0;
	height: 0;
	margin-left: 0.3em;
	vertical-align: middle;
	content: "";
	border-top: 0.3em solid;
	border-right: 0.3em solid transparent;
	border-left: 0.3em solid transparent;
}

.btn-group .btn + .btn,
.btn-group .btn + .btn-group,
.btn-group .btn-group + .btn,
.btn-group .btn-group + .btn-group {
	margin-left: 0;
}

.btn-group-vertical > .btn + .btn,
.btn-group-vertical > .btn + .btn-group,
.btn-group-vertical > .btn-group + .btn,
.btn-group-vertical > .btn-group + .btn-group {
	margin-top: 0;
}

.btn-group .btn + .btn,
.btn-group .btn + .btn-group > .dropdown-toggle {
	-webkit-box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
	box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
}

.border-secondary {
	border: 1px solid #dfdfdf !important;
}

body,
input,
button {
	-webkit-font-smoothing: antialiased;
	letter-spacing: .1px;
}

p {
	margin: 0 0 1em;
}

a {
	-webkit-transition: all 0.2s;
	transition: all 0.2s;
}

.text-secondary {
	color: #bbb !important;
}

.table-hover > tbody > tr,
.table-hover > tbody > tr > th,
.table-hover > tbody > tr > td {
	-webkit-transition: all 0.2s;
	transition: all 0.2s;
}

.thead-inverse th {
	background-color: #2196F3;
	color: #fff;
}

.col-form-label {
	font-size: 16px;
}

.col-form-label-sm {
	font-size: 0.7109375rem;
}

.col-form-label-lg {
	font-size: 1.015625rem;
}

textarea,
textarea.form-control,
input.form-control,
input[type=text],
input[type=password],
input[type=email],
input[type=number],
[type=text].form-control,
[type=password].form-control,
[type=email].form-control,
[type=tel].form-control,
[contenteditable].form-control {
	-webkit-box-shadow: inset 0 -1px 0 #ddd;
	box-shadow: inset 0 -1px 0 #ddd;
	-webkit-transition: all 0.2s;
	transition: all 0.2s;
}

textarea:focus,
textarea.form-control:focus,
input.form-control:focus,
input[type=text]:focus,
input[type=password]:focus,
input[type=email]:focus,
input[type=number]:focus,
[type=text].form-control:focus,
[type=password].form-control:focus,
[type=email].form-control:focus,
[type=tel].form-control:focus,
[contenteditable].form-control:focus {
	-webkit-box-shadow: inset 0 -2px 0 #2196F3;
	box-shadow: inset 0 -2px 0 #2196F3;
}

textarea[disabled], textarea[readonly],
textarea.form-control[disabled],
textarea.form-control[readonly],
input.form-control[disabled],
input.form-control[readonly],
input[type=text][disabled],
input[type=text][readonly],
input[type=password][disabled],
input[type=password][readonly],
input[type=email][disabled],
input[type=email][readonly],
input[type=number][disabled],
input[type=number][readonly],
[type=text].form-control[disabled],
[type=text].form-control[readonly],
[type=password].form-control[disabled],
[type=password].form-control[readonly],
[type=email].form-control[disabled],
[type=email].form-control[readonly],
[type=tel].form-control[disabled],
[type=tel].form-control[readonly],
[contenteditable].form-control[disabled],
[contenteditable].form-control[readonly] {
	-webkit-box-shadow: none;
	box-shadow: none;
	border-bottom: 1px dotted #ddd;
}

textarea[disabled], textarea[disabled]::-webkit-input-placeholder,
textarea.form-control[disabled],
textarea.form-control[disabled]::-webkit-input-placeholder,
input.form-control[disabled],
input.form-control[disabled]::-webkit-input-placeholder,
input[type=text][disabled],
input[type=text][disabled]::-webkit-input-placeholder,
input[type=password][disabled],
input[type=password][disabled]::-webkit-input-placeholder,
input[type=email][disabled],
input[type=email][disabled]::-webkit-input-placeholder,
input[type=number][disabled],
input[type=number][disabled]::-webkit-input-placeholder,
[type=text].form-control[disabled],
[type=text].form-control[disabled]::-webkit-input-placeholder,
[type=password].form-control[disabled],
[type=password].form-control[disabled]::-webkit-input-placeholder,
[type=email].form-control[disabled],
[type=email].form-control[disabled]::-webkit-input-placeholder,
[type=tel].form-control[disabled],
[type=tel].form-control[disabled]::-webkit-input-placeholder,
[contenteditable].form-control[disabled],
[contenteditable].form-control[disabled]::-webkit-input-placeholder {
	color: #ddd;
}

textarea[disabled], textarea[disabled]:-ms-input-placeholder,
textarea.form-control[disabled],
textarea.form-control[disabled]:-ms-input-placeholder,
input.form-control[disabled],
input.form-control[disabled]:-ms-input-placeholder,
input[type=text][disabled],
input[type=text][disabled]:-ms-input-placeholder,
input[type=password][disabled],
input[type=password][disabled]:-ms-input-placeholder,
input[type=email][disabled],
input[type=email][disabled]:-ms-input-placeholder,
input[type=number][disabled],
input[type=number][disabled]:-ms-input-placeholder,
[type=text].form-control[disabled],
[type=text].form-control[disabled]:-ms-input-placeholder,
[type=password].form-control[disabled],
[type=password].form-control[disabled]:-ms-input-placeholder,
[type=email].form-control[disabled],
[type=email].form-control[disabled]:-ms-input-placeholder,
[type=tel].form-control[disabled],
[type=tel].form-control[disabled]:-ms-input-placeholder,
[contenteditable].form-control[disabled],
[contenteditable].form-control[disabled]:-ms-input-placeholder {
	color: #ddd;
}

textarea[disabled], textarea[disabled]::-ms-input-placeholder,
textarea.form-control[disabled],
textarea.form-control[disabled]::-ms-input-placeholder,
input.form-control[disabled],
input.form-control[disabled]::-ms-input-placeholder,
input[type=text][disabled],
input[type=text][disabled]::-ms-input-placeholder,
input[type=password][disabled],
input[type=password][disabled]::-ms-input-placeholder,
input[type=email][disabled],
input[type=email][disabled]::-ms-input-placeholder,
input[type=number][disabled],
input[type=number][disabled]::-ms-input-placeholder,
[type=text].form-control[disabled],
[type=text].form-control[disabled]::-ms-input-placeholder,
[type=password].form-control[disabled],
[type=password].form-control[disabled]::-ms-input-placeholder,
[type=email].form-control[disabled],
[type=email].form-control[disabled]::-ms-input-placeholder,
[type=tel].form-control[disabled],
[type=tel].form-control[disabled]::-ms-input-placeholder,
[contenteditable].form-control[disabled],
[contenteditable].form-control[disabled]::-ms-input-placeholder {
	color: #ddd;
}

textarea[disabled], textarea[disabled]::placeholder,
textarea.form-control[disabled],
textarea.form-control[disabled]::placeholder,
input.form-control[disabled],
input.form-control[disabled]::placeholder,
input[type=text][disabled],
input[type=text][disabled]::placeholder,
input[type=password][disabled],
input[type=password][disabled]::placeholder,
input[type=email][disabled],
input[type=email][disabled]::placeholder,
input[type=number][disabled],
input[type=number][disabled]::placeholder,
[type=text].form-control[disabled],
[type=text].form-control[disabled]::placeholder,
[type=password].form-control[disabled],
[type=password].form-control[disabled]::placeholder,
[type=email].form-control[disabled],
[type=email].form-control[disabled]::placeholder,
[type=tel].form-control[disabled],
[type=tel].form-control[disabled]::placeholder,
[contenteditable].form-control[disabled],
[contenteditable].form-control[disabled]::placeholder {
	color: #ddd;
}

textarea::-ms-clear,
textarea.form-control::-ms-clear,
input.form-control::-ms-clear,
input[type=text]::-ms-clear,
input[type=password]::-ms-clear,
input[type=email]::-ms-clear,
input[type=number]::-ms-clear,
[type=text].form-control::-ms-clear,
[type=password].form-control::-ms-clear,
[type=email].form-control::-ms-clear,
[type=tel].form-control::-ms-clear,
[contenteditable].form-control::-ms-clear {
	display: none;
}

select,
select.form-control {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	padding: 0.5rem 0;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAJ1BMVEVmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaP/QSjAAAADHRSTlMAAgMJC0uWpKa6wMxMdjkoAAAANUlEQVR4AeXJyQEAERAAsNl7Hf3X6xt0QL6JpZWq30pdvdadme+0PMdzvHm8YThHcT1H7K0BtOMDniZhWOgAAAAASUVORK5CYII=);
	background-size: 13px;
	background-repeat: no-repeat;
	background-position: right center;
	-webkit-box-shadow: inset 0 -1px 0 #ddd;
	box-shadow: inset 0 -1px 0 #ddd;
}

select::-ms-expand,
select.form-control::-ms-expand {
	display: none;
}

select.input-sm,
select.form-control.input-sm {
	font-size: 0.7109375rem;
}

select.input-lg,
select.form-control.input-lg {
	font-size: 1.015625rem;
}

select:focus,
select.form-control:focus {
	-webkit-box-shadow: inset 0 -2px 0 #2196F3;
	box-shadow: inset 0 -2px 0 #2196F3;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAJ1BMVEUhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISF8S9ewAAAADHRSTlMAAgMJC0uWpKa6wMxMdjkoAAAANUlEQVR4AeXJyQEAERAAsNl7Hf3X6xt0QL6JpZWq30pdvdadme+0PMdzvHm8YThHcT1H7K0BtOMDniZhWOgAAAAASUVORK5CYII=);
}

select[multiple],
select.form-control[multiple] {
	background: none;
}

.custom-control-label::before {
	top: 0;
	border: 2px solid #ced4da;
}

.custom-control-label::after {
	top: 0;
}

.custom-control-input:checked ~ .custom-control-label::before {
	border-color: #2196F3;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
	-webkit-transform: scale(1.5);
	transform: scale(1.5);
}

.custom-radio .custom-control-input:checked ~ .custom-control-label::before {
	background-color: #fff;
}

.custom-radio .custom-control-input:checked ~ .custom-control-label::after {
	-webkit-transform: scale(1.125);
	transform: scale(1.125);
	-webkit-transition: 240ms;
	transition: 240ms;
}

.custom-radio .custom-control-input ~ .custom-control-label::after {
	-webkit-transform: scale(0.75);
	transform: scale(0.75);
}

.has-warning input:not([type=checkbox]),
.has-warning .form-control,
.has-warning input.form-control[readonly],
.has-warning input[type=text][readonly],
.has-warning [type=text].form-control[readonly],
.has-warning input:not([type=checkbox]):focus,
.has-warning .form-control:focus {
	border-bottom: none;
	-webkit-box-shadow: inset 0 -2px 0 #ff9800;
	box-shadow: inset 0 -2px 0 #ff9800;
}

.has-danger input:not([type=checkbox]),
.has-danger .form-control,
.has-danger input.form-control[readonly],
.has-danger input[type=text][readonly],
.has-danger [type=text].form-control[readonly],
.has-danger input:not([type=checkbox]):focus,
.has-danger .form-control:focus {
	border-bottom: none;
	-webkit-box-shadow: inset 0 -2px 0 #e51c23;
	box-shadow: inset 0 -2px 0 #e51c23;
}

.has-success input:not([type=checkbox]),
.has-success .form-control,
.has-success input.form-control[readonly],
.has-success input[type=text][readonly],
.has-success [type=text].form-control[readonly],
.has-success input:not([type=checkbox]):focus,
.has-success .form-control:focus {
	border-bottom: none;
	-webkit-box-shadow: inset 0 -2px 0 #4CAF50;
	box-shadow: inset 0 -2px 0 #4CAF50;
}

.has-warning .input-group-addon, .has-danger .input-group-addon, .has-success .input-group-addon {
	color: #666;
	border-color: transparent;
	background-color: transparent;
}

.input-group > .input-group-prepend > .input-group-text {
	padding-right: 0.25rem;
}

.input-group > .input-group-append > .input-group-text {
	padding-left: 0.25rem;
}

.input-group .form-control {
	padding-left: 0.25rem;
	padding-right: 0.25rem;
}

.input-group-sm > .input-group-prepend > .btn,
.input-group-sm > .input-group-append > .btn {
	padding: 0.25rem 0.5rem;
}

.input-group-sm > .input-group-prepend > .input-group-text {
	padding: 0.25rem 0.5rem 0.25rem 0;
}

.input-group-sm > .input-group-append > .input-group-text {
	padding: 0.25rem 0 0.25rem 0.5rem;
}

.input-group-sm > .input-group-prepend > .btn {
	border-top-left-radius: 0.2rem;
	border-bottom-left-radius: 0.2rem;
}

.input-group-sm > .input-group-append > .btn {
	border-top-right-radius: 0.2rem;
	border-bottom-right-radius: 0.2rem;
}

.input-group-lg > .input-group-prepend > .btn,
.input-group-lg > .input-group-append > .btn {
	padding: 0.5rem 1rem;
}

.input-group-lg > .input-group-prepend > .input-group-text {
	padding: 0.5rem 1rem 0.5rem 0;
}

.input-group-lg > .input-group-append > .input-group-text {
	padding: 0.5rem 0 0.5rem 1rem;
}

.input-group-lg > .input-group-prepend > .btn {
	border-top-left-radius: 0.3rem;
	border-bottom-left-radius: 0.3rem;
}

.input-group-lg > .input-group-append > .btn {
	border-top-right-radius: 0.3rem;
	border-bottom-right-radius: 0.3rem;
}

.form-group-lg select,
.form-group-lg select.form-control {
	line-height: 1.5;
}

.nav-tabs .nav-item + .nav-item {
	margin-left: 0;
}

.nav-tabs .nav-link,
.nav-tabs .nav-link:focus {
	margin-right: 0;
	background-color: transparent;
	border: none;
	color: #444;
	-webkit-box-shadow: inset 0 -1px 0 #ddd;
	box-shadow: inset 0 -1px 0 #ddd;
	-webkit-transition: all 0.2s;
	transition: all 0.2s;
}

.nav-tabs .nav-link:hover,
.nav-tabs .nav-link:focus:hover {
	background-color: transparent;
	-webkit-box-shadow: inset 0 -2px 0 #2196F3;
	box-shadow: inset 0 -2px 0 #2196F3;
	color: #2196F3;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-link.active:focus {
	border: none;
	-webkit-box-shadow: inset 0 -2px 0 #2196F3;
	box-shadow: inset 0 -2px 0 #2196F3;
	color: #2196F3;
}

.nav-tabs .nav-link.active:hover,
.nav-tabs .nav-link.active:focus:hover {
	border: none;
	color: #2196F3;
}

.nav-tabs .nav-link.disabled {
	-webkit-box-shadow: inset 0 -1px 0 #ddd;
	box-shadow: inset 0 -1px 0 #ddd;
}

.nav-tabs.nav-justified .nav-link,
.nav-tabs.nav-justified .nav-link:hover,
.nav-tabs.nav-justified .nav-link:focus,
.nav-tabs.nav-justified .nav-link.active,
.nav-tabs.nav-justified .nav-link.active:hover,
.nav-tabs.nav-justified .nav-link.active:focus {
	border: none;
}

.nav-tabs .dropdown-menu {
	margin-top: 0;
}

.dropdown-menu {
	margin-top: 0;
	border: none;
	-webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.alert {
	padding-right: 2.5rem;
	border: none;
}

.alert, .alert h1, .alert h2, .alert h3, .alert h4, .alert h5, .alert h6 {
	color: #fff;
}

.alert-primary {
	background: #2196F3 -webkit-gradient(linear, left top, left bottom, from(#42a6f5), to(#2196F3)) repeat-x;
	background: #2196F3 linear-gradient(180deg, #42a6f5, #2196F3) repeat-x;
}

.alert-secondary {
	background: #fff -webkit-gradient(linear, left top, left bottom, from(white), to(#fff)) repeat-x;
	background: #fff linear-gradient(180deg, white, #fff) repeat-x;
}

.alert-success {
	background: #4CAF50 -webkit-gradient(linear, left top, left bottom, from(#67bb6a), to(#4CAF50)) repeat-x;
	background: #4CAF50 linear-gradient(180deg, #67bb6a, #4CAF50) repeat-x;
}

.alert-info {
	background: #9C27B0 -webkit-gradient(linear, left top, left bottom, from(#ab47bc), to(#9C27B0)) repeat-x;
	background: #9C27B0 linear-gradient(180deg, #ab47bc, #9C27B0) repeat-x;
}

.alert-warning {
	background: #ff9800 -webkit-gradient(linear, left top, left bottom, from(#ffa726), to(#ff9800)) repeat-x;
	background: #ff9800 linear-gradient(180deg, #ffa726, #ff9800) repeat-x;
}

.alert-danger {
	background: #e51c23 -webkit-gradient(linear, left top, left bottom, from(#e93e44), to(#e51c23)) repeat-x;
	background: #e51c23 linear-gradient(180deg, #e93e44, #e51c23) repeat-x;
}

.alert-light {
	background: #fff -webkit-gradient(linear, left top, left bottom, from(white), to(#fff)) repeat-x;
	background: #fff linear-gradient(180deg, white, #fff) repeat-x;
}

.alert-dark {
	background: #222 -webkit-gradient(linear, left top, left bottom, from(#434343), to(#222)) repeat-x;
	background: #222 linear-gradient(180deg, #434343, #222) repeat-x;
}

.alert a:not(.btn),
.alert .alert-link {
	color: #fff;
	font-weight: bold;
}

.alert .close {
	color: #fff;
}

.alert-secondary,
.alert-secondary a:not(.btn),
.alert-secondary .alert-link, .alert-light,
.alert-light a:not(.btn),
.alert-light .alert-link {
	color: #444;
}

.badge-secondary {
	background-color: #bbb;
	color: #fff;
}

.badge-light {
	background-color: #eee;
}

.badge-warning {
	color: #fff;
}

.tag {
	padding: 4px 6px 4px;
}

.close {
	line-height: 0.5;
	opacity: 0.6;
	-webkit-transition: all 0.2s;
	transition: all 0.2s;
}

.close:hover {
	opacity: 1;
}

.card {
	-webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
}

.card.border-primary, .card.border-secondary, .card.border-success, .card.border-info, .card.border-warning, .card.border-danger, .card.border-light, .card.border-dark {
	border-width: 1px;
}

.alert-dismissible .close {
	padding: 0.5rem 0.75rem;
}

.list-group-item-action.active h1, .list-group-item-action.active h2, .list-group-item-action.active h3, .list-group-item-action.active h4, .list-group-item-action.active h5, .list-group-item-action.active h6 {
	color: #fff;
}

.modal-content {
	border-radius: 0.2rem;
	-webkit-box-shadow: 0 6px 36px rgba(0, 0, 0, 0.3);
	box-shadow: 0 6px 36px rgba(0, 0, 0, 0.3);
}

.popover {
	border: none;
	-webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.carousel-caption h1, .carousel-caption h2, .carousel-caption h3, .carousel-caption h4, .carousel-caption h5, .carousel-caption h6 {
	color: inherit;
}


`