import test from 'ava'
import BinaryTreeNode from '../../util/BinaryTree'
import Queue from '../../util/Queue'

function getBTree() {
  const a = new BinaryTreeNode(314)
  const b = new BinaryTreeNode(6)
  const c = new BinaryTreeNode(271)
  const d = new BinaryTreeNode(28)
  const e = new BinaryTreeNode(0)
  const f = new BinaryTreeNode(561)
  const g = new BinaryTreeNode(3)
  const h = new BinaryTreeNode(17)
  const i = new BinaryTreeNode(6)
  const j = new BinaryTreeNode(2)
  const k = new BinaryTreeNode(1)
  const l = new BinaryTreeNode(401)
  const m = new BinaryTreeNode(641)
  const n = new BinaryTreeNode(257)
  const o = new BinaryTreeNode(271)
  const p = new BinaryTreeNode(28)

  a.addLeft(b)
  a.addRight(i)
  i.addLeft(j)
  i.addRight(o)
  o.addRight(p)
  j.addRight(k)
  k.addLeft(l)
  k.addRight(n)
  l.addRight(m)
  b.addLeft(c)
  c.addLeft(d)
  c.addRight(e)
  b.addRight(f)
  f.addRight(g)
  g.addLeft(h)
  return a
}

function traverse(node) {
  if (!node) return null
  const traverseQueue = new Queue()
  const storeQueue = new Queue()
  traverseQueue.queue([node, -1])
  while (!traverseQueue.isEmpty()) {
    const [n, level] = traverseQueue.dequeue()
    storeQueue.queue([n, level + 1])
    if (n.left !== null) {
      traverseQueue.queue([n.left, level + 1])
    }
    if (n.right !== null) {
      traverseQueue.queue([n.right, level + 1])
    }
  }
  while (!storeQueue.isEmpty()) {
    const pop = storeQueue.dequeue()
    //console.log(`Item ${pop[0].data} at level ${pop[1]}`)
  }
}

test('traverse', t => {
  traverse(getBTree())
  t.true(true)
})
