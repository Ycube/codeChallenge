//beezwax
function findFirstMatchChar(string) {
  var answer = '';
  //edge case  
  if (typeof string != 'string') {
    console.log(-1);
    return -1;
  }

  //use regex to remove nonalphabetic chars
  var storage = string.replace(/[^0-9a-z]/gi, '').split('').sort();
  
  for (var k = 0; k < storage.length; k++) {
    if (storage[0] === storage[k]) {
      answer += storage[k];
    }
  }
  console.log(answer);
  return answer;
}

var str = 'c$c. %aa! bb#?';
var crazy = 'h$|j..g|qr@p$ $r.|@$.jhpqg| .rpq@.$hg||j$ r.$g||pq$j@.h jh|.pq.|@gr$$ j|g$h@.p.r|q$ pgq|h$j.$|r.@ qgp@h$r$.j||. h@|$pr.j|qg.$ h|@qj.p$g$|.r @$r|hq.j|g.p$ |$.gj.rhq@p|$ .p.|@q|j$g$rh |.|$hgr@pj.q$ $grj.h@$q|p.| jhr$|$p@|..qg q|.j$g@.p$h|r $q.$@rpgj||.h .jrhg@.|$q|$p p.@r|gj$$h.q| rq$|.@|pjh.$g $.hqj@p$||g.r @$.gj|q$|h.rp @$.$h|q.g|pjr g.rq.h|@$$pj| $j@.hgq$|p|.r qhp||$j..g@r$ .qrp$gh$|@j.| h|g.$q.r$jp@| $@jq.r|gh|.p$';

findFirstMatchChar(str); //aa
findFirstMatchChar(crazy); //gggggggggggggggggggggggggggggg
findFirstMatchChar(undefined); //-1