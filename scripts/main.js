/////////////////////
//PRIMARY JS SCRIPT//
/////////////////////

//getting screen width
let width = document.documentElement.clientWidth;

//defining functions
function set_text_sizes( width, queries, rels ) {
	for ( i=0; i < queries.length; i++ ) {
        for ( j=0; j < queries[i].length; j++ ) {
		    queries[i][j].style.setProperty( 'font-size', rels[i](width)+'pt' );
        }
	}
}

function on_resize() {
	width = document.documentElement.clientWidth;
    console.log(width);
	set_text_sizes( width, queries, rels );
    doc_all.style.setProperty( '--width', width+'px' );
}

//defining property relations
const rel_text = x => 8 + ( 8 )*( x-300 )/( 1600-300 );
const rel_h1 = x => 16 + ( 8 )*( x-300 )/( 1300 );
const rel_h2 = x => 12 + ( 8 )*( x-300 )/( 1300 );
const rel_h3 = x => 14 + ( 8 )*( x-300 )/( 1300 );
const rel_h4 = x => 12 + ( 8 )*( x-300 )/( 1300 );
const rel_h5 = x => 8 + ( 8 )*( x-300 )/( 1300 );

const rels = [ rel_text, rel_h1, rel_h2, rel_h3, rel_h4, rel_h5 ];

//setting document queries
const doc_all = document.querySelectorAll( '*' );
const doc_h1 = document.querySelectorAll( 'h1' );
const doc_h2 = document.querySelectorAll( 'h2' );
const doc_h3 = document.querySelectorAll( 'h3' );
const doc_h4 = document.querySelectorAll( 'h4' );
const doc_h5 = document.querySelectorAll( 'h5' );

const queries = [ doc_all, doc_h1, doc_h2, doc_h3, doc_h4, doc_h5 ];

//setting initial values
set_text_sizes( width, queries, rels );

//looking for window resizing
window.addEventListener( "resize", on_resize);
