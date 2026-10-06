class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {

        Map<String, List<String>> result = new HashMap<>();
        
        for (String str : strs){
            
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String sorted = new String(chars);
                        
            result.computeIfAbsent(sorted, k -> new ArrayList<>()).add(str);
        }

        return new ArrayList<>(result.values());
    }
}