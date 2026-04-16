import React, { useState, useEffect } from 'react';
import { Plus, Trash2, CheckCircle, Circle, Calendar, Tag, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [
      { id: 1, text: 'Design the hero section', completed: true, priority: 'high' },
      { id: 2, text: 'Implement glassmorphism effects', completed: false, priority: 'medium' },
      { id: 3, text: 'Add Framer Motion animations', completed: false, priority: 'low' },
    ];
  });

  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('medium');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
      priority,
      createdAt: new Date().toISOString()
    };
    setTodos([newTodo, ...todos]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const getPriorityColor = (p) => {
    switch (p) {
      case 'high': return 'text-rose-500 bg-rose-50 border-rose-100';
      case 'medium': return 'text-amber-500 bg-amber-50 border-amber-100';
      case 'low': return 'text-emerald-500 bg-emerald-50 border-emerald-100';
      default: return 'text-slate-500 bg-slate-50 border-slate-100';
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 glass rounded-3xl border border-white/40 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-secondary"></div>
      
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Your Workboard</h2>
          <p className="text-slate-500 text-sm mt-1">Manage your professional workflow effortlessly.</p>
        </div>
        <div className="bg-brand-primary/10 px-4 py-2 rounded-full">
          <span className="text-brand-primary font-semibold text-sm">
            {todos.filter(t => !t.completed).length} Tasks Left
          </span>
        </div>
      </div>

      <form onSubmit={addTodo} className="mb-8 space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What needs to be done?..."
              className="w-full pl-4 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-slate-700"
            />
          </div>
          <button
            type="submit"
            className="p-4 bg-brand-primary text-white rounded-2xl hover:bg-brand-primary/90 transition-colors shadow-lg shadow-brand-primary/20"
          >
            <Plus size={24} />
          </button>
        </div>

        <div className="flex items-center gap-4 px-2">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Priority:</span>
          <div className="flex gap-2">
            {['low', 'medium', 'high'].map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPriority(p)}
                className={`px-3 py-1 rounded-lg text-xs font-medium capitalize border transition-all ${
                  priority === p 
                    ? 'bg-slate-800 text-white border-slate-800' 
                    : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </form>

      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {todos.map((todo) => (
            <motion.div
              key={todo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={`group flex items-center gap-4 p-4 bg-white/50 border border-slate-100 rounded-2xl hover:border-brand-primary/30 hover:bg-white hover:shadow-md transition-all ${todo.completed ? 'opacity-60' : ''}`}
            >
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`transition-colors ${todo.completed ? 'text-brand-primary' : 'text-slate-300 group-hover:text-slate-400'}`}
              >
                {todo.completed ? <CheckCircle size={24} /> : <Circle size={24} />}
              </button>

              <div className="flex-1">
                <p className={`text-slate-700 font-medium transition-all ${todo.completed ? 'line-through text-slate-400' : ''}`}>
                  {todo.text}
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold uppercase border ${getPriorityColor(todo.priority)}`}>
                    {todo.priority}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400 text-[10px]">
                    <Calendar size={10} />
                    <span>Just now</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
              >
                <Trash2 size={18} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>

        {todos.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
              <CheckCircle size={32} className="text-slate-300" />
            </div>
            <p className="text-slate-500 font-medium">All caught up! Time to relax.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
