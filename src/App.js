import { useState } from "react";
import Trie from "./trie.js";
import "./App.css";
var myTrie = new Trie();
myTrie.insert("car");
myTrie.insert("helium");
myTrie.insert("carpet");
myTrie.insert("hello");
myTrie.insert("world");

function App() {
  const [prefix, setPrefix] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const onChange = (e) => {
    var value = e.target.value;
    setPrefix(value);
    var words = value.split(" ");
    var trie_prefix = words[words.length - 1];
    var found_words = myTrie.find(trie_prefix).sort((a, b) => {
      return a.length - b.length;
    });
    var first_word = found_words[0];
    if (
      found_words.length !== 0 &&
      value !== "" &&
      value[value.length - 1] !== " "
    ) {
      if (first_word != null) {
        var remainder = first_word.slice(trie_prefix.length);
        setSuggestion(value + remainder);
      }
    } else {
      setSuggestion(value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      setPrefix(suggestion);
    }
  };

  return (
    <div className="App">
      <input
        list="words"
        type="text"
        name="search-bar"
        id="search-bar"
        placeholder="Search..."
        value={prefix}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <input
        type="text"
        name="search-bar2"
        id="search-bar2"
        value={suggestion}
        onChange={(e) => setSuggestion(e.target.value)}
      />
    </div>
  );
}

export default App;
