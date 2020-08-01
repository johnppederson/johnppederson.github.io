/////////////////////
//PRIMARY JS SCRIPT//
/////////////////////

//getting screen width
let width = document.documentElement.clientWidth;

//defining functions
function set_text_sizes( width, queries, rels ) {
	for ( i=0; i < queries.length; i++ ) {
		queries[i].style.setProperty( 'font-size', rels[i](width)+'pt' );
	}
}

//defining property relations
const rel_text = x => 10 + ( 14-10 )*( x-300 )/( 1300-300 );
const rel_h1 = x => 20 + ( 24-18 )*( width-300 )/( 1300-300 );
const rel_h2 = x => 8 + ( 16-8 )*( width-300 )/( 1300-300 );

const rels = [ rel_text, rel_h1, rel_h2 ];

//setting document queries
const doc_all = document.querySelector( '*' );
const doc_h1 = document.querySelector( 'h1' );
const doc_h2 = document.querySelector( 'h2' );

const queries = [ doc_all, doc_h1 , doc_2 ];

//setting initial values
set_text_sizes( width, queries, rels );

let click_count = 0;

//looking for window resizing
window.addEventListener( "resize", function() {
	width = document.documentElement.clientWidth;
	set_text_sizes( width, queries, rels );
	doc_all.style.setProperty( '--width', width+'px' );
});
