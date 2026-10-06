class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, ArrayList> result = new HashMap<>();
        ArrayList groupAnagrams = new ArrayList<>();
        
        for(String str : strs){
            
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String sorted = new String(chars);
            
            ArrayList anagrams = new ArrayList<>();
            if(result.get(sorted) != null){
                anagrams = result.get(sorted);
            }
            anagrams.add(str);
            result.put(sorted, anagrams);
        }

        for(List<String> anagrams : result.values()){
            groupAnagrams.add(anagrams);
        }

        return groupAnagrams;
    }
}
