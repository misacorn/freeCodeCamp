function bouncer(arr) {
  return arr.filter(Boolean)
}

bouncer([7, "ate", null, true, 0, -9, undefined])