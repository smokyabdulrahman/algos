function searchInsert(nums: number[], target: number): number {
    return searchInsertUtil(nums, target, 0, nums.length - 1);
};

function searchInsertUtil(nums: number[], target: number, firstIndex: number, lastIndex: number): number {

    if (firstIndex > lastIndex) {
        return firstIndex;
    }

    const midIndex = Math.floor((firstIndex + lastIndex) / 2);
    //                |     |
    // Input: nums = [1,3,5,6], target = 5
    // Output: 2
    if (nums[midIndex] === target) return midIndex;
    if (nums[midIndex] < target) return searchInsertUtil(nums, target, midIndex + 1, lastIndex);
    if (nums[midIndex] > target) return searchInsertUtil(nums, target, firstIndex, midIndex - 1);

    return -1;
}