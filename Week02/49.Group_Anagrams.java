class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List> map = new HashMap<String, List>();
        int[] count = new int[26];
        for (String str : strs) {
            Arrays.fill(count, 0);
            char[] charArr = str.toCharArray();
            for (char word : charArr) count[word - 'a']++;
            StringBuilder sb = new StringBuilder("");
            for (int number : count) {
                sb.append("#");
                sb.append(number);
            }
            String key = sb.toString();
            if (!map.containsKey(key))
                map.put(key, new ArrayList());
            map.get(key).add(str);
        }
        return new ArrayList(map.values());
    }
}