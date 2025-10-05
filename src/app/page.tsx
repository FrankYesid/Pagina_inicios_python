'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Code, Play, Copy, Check, Lightbulb, Trophy, Target, Video, ExternalLink } from 'lucide-react'

const tabs = [
  {
    id: 'introduccion',
    number: 1,
    title: 'Introducción',
    icon: BookOpen,
    color: 'blue',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200'
  },
  {
    id: 'variables',
    number: 2,
    title: 'Variables',
    icon: Code,
    color: 'green',
    bgColor: 'bg-green-100',
    textColor: 'text-green-700',
    borderColor: 'border-green-200'
  },
  {
    id: 'operadores',
    number: 3,
    title: 'Operadores',
    icon: Code,
    color: 'purple',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-700',
    borderColor: 'border-purple-200'
  },
  {
    id: 'condicionales',
    number: 4,
    title: 'Condicionales',
    icon: Code,
    color: 'orange',
    bgColor: 'bg-orange-100',
    textColor: 'text-orange-700',
    borderColor: 'border-orange-200'
  },
  {
    id: 'listas',
    number: 5,
    title: 'Listas',
    icon: Code,
    color: 'teal',
    bgColor: 'bg-teal-100',
    textColor: 'text-teal-700',
    borderColor: 'border-teal-200'
  },
  {
    id: 'diccionarios',
    number: 6,
    title: 'Diccionarios',
    icon: Code,
    color: 'cyan',
    bgColor: 'bg-cyan-100',
    textColor: 'text-cyan-700',
    borderColor: 'border-cyan-200'
  },
  {
    id: 'bucles',
    number: 7,
    title: 'Bucles',
    icon: Code,
    color: 'pink',
    bgColor: 'bg-pink-100',
    textColor: 'text-pink-700',
    borderColor: 'border-pink-200'
  },
  {
    id: 'comprensiones',
    number: 8,
    title: 'Comprensiones',
    icon: Code,
    color: 'rose',
    bgColor: 'bg-rose-100',
    textColor: 'text-rose-700',
    borderColor: 'border-rose-200'
  },
  {
    id: 'actividades',
    number: 9,
    title: 'Actividades',
    icon: Play,
    color: 'red',
    bgColor: 'bg-red-100',
    textColor: 'text-red-700',
    borderColor: 'border-red-200'
  },
  {
    id: 'recursos',
    number: 10,
    title: 'Recursos',
    icon: Trophy,
    color: 'indigo',
    bgColor: 'bg-indigo-100',
    textColor: 'text-indigo-700',
    borderColor: 'border-indigo-200'
  },
  {
    id: 'videos',
    number: 11,
    title: 'Videos',
    icon: Video,
    color: 'emerald',
    bgColor: 'bg-emerald-100',
    textColor: 'text-emerald-700',
    borderColor: 'border-emerald-200'
  }
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('introduccion')
  const [copiedCode, setCopiedCode] = useState('')

  // Componente de código mejorado
  const CodeBlock = ({ code, language = 'python', title = '' }) => {
    const [isCopied, setIsCopied] = useState(false)
    
    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(code)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      } catch (err) {
        console.error('Error al copiar el código:', err)
      }
    }

    return (
      <div className="relative group">
        {title && (
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-800 flex items-center gap-2">
              <Code className="w-4 h-4" />
              {title}
            </h4>
          </div>
        )}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-1 shadow-2xl">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800/50 rounded-t-lg border-b border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 font-mono">{language}</span>
              <button
                onClick={copyToClipboard}
                className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 transition-colors duration-200"
                title="Copiar código"
              >
                {isCopied ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
                )}
              </button>
            </div>
          </div>
          <pre className="p-4 overflow-x-auto">
            <code className="text-sm font-mono text-gray-100 leading-relaxed">
              {code}
            </code>
          </pre>
        </div>
        {isCopied && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium animate-pulse">
            ¡Copiado!
          </div>
        )}
      </div>
    )
  }

  // Componente de tip mejorado
  const TipCard = ({ title, children, icon: Icon = Lightbulb, type = 'info' }) => {
    const colors = {
      info: 'from-blue-50 to-blue-100 border-blue-200 text-blue-800',
      success: 'from-green-50 to-green-100 border-green-200 text-green-800',
      warning: 'from-yellow-50 to-yellow-100 border-yellow-200 text-yellow-800',
      error: 'from-red-50 to-red-100 border-red-200 text-red-800'
    }
    
    return (
      <div className={`bg-gradient-to-r ${colors[type]} border-l-4 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300`}>
        <div className="flex items-start gap-3">
          <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold mb-2">{title}</h4>
            <div className="text-sm leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Componente de ejercicio interactivo
  const ExerciseCard = ({ title, description, difficulty = 'fácil' }) => {
    const [isCompleted, setIsCompleted] = useState(false)
    
    const difficultyColors = {
      fácil: 'bg-green-100 text-green-800 border-green-200',
      medio: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      difícil: 'bg-red-100 text-red-800 border-red-200'
    }
    
    return (
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-purple-600" />
            <h4 className="font-bold text-gray-800">{title}</h4>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${difficultyColors[difficulty]}`}>
              {difficulty}
            </span>
            <button
              onClick={() => setIsCompleted(!isCompleted)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isCompleted 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {isCompleted ? <Check className="w-4 h-4" /> : <div className="w-4 h-4" />}
            </button>
          </div>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Trophy className="w-4 h-4" />
          <span>Completa este ejercicio para ganar puntos de experiencia</span>
        </div>
      </div>
    )
  }

  // Componente de pregunta de quiz
  const QuizQuestion = ({ question, options, correctAnswer, explanation }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [showExplanation, setShowExplanation] = useState(false)
    
    const handleAnswerSelect = (index) => {
      setSelectedAnswer(index)
      setShowExplanation(true)
    }
    
    const getOptionStyle = (index) => {
      if (selectedAnswer === null) {
        return 'bg-gray-50 hover:bg-gray-100 border-gray-200'
      }
      
      if (index === correctAnswer) {
        return 'bg-green-50 border-green-300'
      }
      
      if (index === selectedAnswer && index !== correctAnswer) {
        return 'bg-red-50 border-red-300'
      }
      
      return 'bg-gray-50 border-gray-200'
    }
    
    const getOptionIcon = (index) => {
      if (selectedAnswer === null) {
        return <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
      }
      
      if (index === correctAnswer) {
        return <Check className="w-4 h-4 text-green-600" />
      }
      
      if (index === selectedAnswer && index !== correctAnswer) {
        return <div className="w-4 h-4 text-red-600">✗</div>
      }
      
      return <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
    }
    
    return (
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-800 text-lg">{question}</h4>
        
        <div className="space-y-3">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 flex items-center gap-3 ${getOptionStyle(index)} ${
                selectedAnswer === null ? 'hover:shadow-md cursor-pointer' : 'cursor-default'
              }`}
            >
              {getOptionIcon(index)}
              <span className={`${
                selectedAnswer !== null && index === correctAnswer ? 'text-green-800 font-medium' :
                selectedAnswer !== null && index === selectedAnswer && index !== correctAnswer ? 'text-red-800' :
                'text-gray-700'
              }`}>
                {option}
              </span>
            </button>
          ))}
        </div>
        
        {showExplanation && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-5 h-5 text-blue-600" />
              <h5 className="font-semibold text-blue-800">Explicación:</h5>
            </div>
            <p className="text-blue-700 leading-relaxed">{explanation}</p>
          </div>
        )}
      </div>
    )
  }

  const getTabContent = (tabId: string) => {
    switch (tabId) {
      case 'introduccion':
        return (
          <div className="space-y-6">
            {/* Encabezado mejorado */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
                <BookOpen className="w-6 h-6" />
                <span className="font-bold">Lección 1</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Introducción - Google Colab
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Aprende a instalar y usar Google Colab para programar en Python
              </p>
            </div>

            <TipCard 
              title="¿Qué es Google Colab?" 
              icon={BookOpen}
              type="info"
            >
              Google Colaboratory (Colab) es un entorno de desarrollo gratuito que te permite 
              escribir y ejecutar código Python en tu navegador, sin necesidad de configuración.
              Es perfecto para principiantes y profesionales por igual.
            </TipCard>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-indigo-800 mb-2">Guía Adicional de Google Colab</h4>
                  <p className="text-indigo-700 mb-4 leading-relaxed">
                    Para complementar tu aprendizaje, te recomendamos esta guía completa que te ayudará a dominar Google Colab paso a paso.
                  </p>
                  <a 
                    href="https://guia-google-colab-g84ruov.gamma.site/guia-google-colab" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <BookOpen className="w-4 h-4" />
                    Acceder a la guía completa
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                Pasos para empezar:
              </h3>
              <ol className="space-y-3">
                {[1, 2, 3, 4].map((step, index) => (
                  <li key={step} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {step}
                    </div>
                    <div className="text-gray-700">
                      {step === 1 && (
                        <>Abre tu navegador y ve a <a href="https://colab.research.google.com" className="text-blue-600 underline font-medium hover:text-blue-800 transition-colors">colab.research.google.com</a></>
                      )}
                      {step === 2 && <>Inicia sesión con tu cuenta de Google</>}
                      {step === 3 && <>Haz clic en "Nuevo notebook" para crear un nuevo proyecto</>}
                      {step === 4 && <>¡Listo! Ya puedes empezar a escribir código Python</>}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <CodeBlock 
              title="Primer código en Colab"
              code={`# Tu primer programa en Python
print("¡Hola, mundo!")
print("Bienvenido a Python")`}
              language="python"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 shadow-lg">
                <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Ventajas de Colab:
                </h4>
                <ul className="space-y-2">
                  {[
                    "Gratis y accesible desde cualquier navegador",
                    "No requiere instalación",
                    "Acceso a GPU gratis",
                    "Almacenamiento en Google Drive",
                    "Librerías preinstaladas"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-green-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 shadow-lg">
                <h4 className="font-bold text-yellow-800 mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Características principales:
                </h4>
                <ul className="space-y-2">
                  {[
                    "Celdas de código y texto",
                    "Ejecución paso a paso",
                    "Gráficos interactivos",
                    "Compartir notebooks",
                    "Importar/Exportar archivos"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-yellow-700">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ExerciseCard 
              title="Tu primer reto"
              description="Crea un notebook en Google Colab y escribe un programa que muestre tu nombre y tu edad. ¡No te preocupes, es más fácil de lo que parece!"
              difficulty="fácil"
            />
          </div>
        )
      case 'variables':
        return (
          <div className="space-y-6">
            {/* Encabezado mejorado */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
                <Code className="w-6 h-6" />
                <span className="font-bold">Lección 2</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Variables y Tipos de Datos
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Aprende sobre variables y los tipos de datos básicos en Python
              </p>
            </div>

            <TipCard 
              title="¿Qué son las variables?" 
              icon={Code}
              type="info"
            >
              Las variables son contenedores que almacenan datos. En Python, no necesitas 
              declarar el tipo de variable explícitamente, el lenguaje lo hace por ti automáticamente.
            </TipCard>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-600" />
                  Tipos de datos básicos:
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Números:
                    </h4>
                    <CodeBlock 
                      code={`# Enteros
edad = 25
altura = 180

# Decimales (float)
precio = 19.99
pi = 3.14159

# Complejos
complejo = 2 + 3j`}
                      language="python"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      Cadenas de texto:
                    </h4>
                    <CodeBlock 
                      code={`# Strings
nombre = "Ana"
apellido = 'García'
mensaje = "Hola mundo"

# Multilínea
parrafo = """Esto es un
texto de varias
líneas"""`}
                      language="python"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                  Otros tipos importantes:
                </h3>
                <CodeBlock 
                  code={`# Booleanos
es_estudiante = True
tiene_trabajo = False

# None (valor nulo)
resultado = None

# Tipo de dato
print(type(edad))        # <class 'int'>
print(type(nombre))      # <class 'str'>
print(type(es_estudiante))  # <class 'bool'>`}
                  language="python"
                />
              </div>

              <TipCard 
                title="Buenas prácticas" 
                icon={Lightbulb}
                type="success"
              >
                <ul className="space-y-2">
                  {[
                    "Usa nombres descriptivos para las variables",
                    "Usa snake_case para nombres de variables (ej: mi_variable)",
                    "Sé consistente en tu estilo de nomenclatura",
                    "Evita palabras reservadas de Python"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </TipCard>

              <ExerciseCard 
                title="Practica con variables"
                description="Crea variables para almacenar tu nombre, edad, altura y si eres estudiante. Luego, imprime cada una con un mensaje descriptivo."
                difficulty="fácil"
              />
            </div>
          </div>
        )
      case 'operadores':
        return (
          <div className="space-y-6">
            {/* Encabezado mejorado */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
                <Code className="w-6 h-6" />
                <span className="font-bold">Lección 3</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Operadores Aritméticos y Lógicos
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Aprende a usar operadores para realizar cálculos y comparaciones
              </p>
            </div>
            <TipCard 
              title="Operadores en Python" 
              icon={Code}
              type="info"
            >
              Los operadores son símbolos especiales que realizan operaciones en variables y valores. 
              Son fundamentales para crear lógica y realizar cálculos en tus programas.
            </TipCard>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  Operadores aritméticos:
                </h3>
                <CodeBlock 
                  code={`# Suma
resultado = 10 + 5  # 15

# Resta
resultado = 10 - 5  # 5

# Multiplicación
resultado = 10 * 5  # 50

# División
resultado = 10 / 3  # 3.333...

# División entera
resultado = 10 // 3  # 3

# Módulo (resto)
resultado = 10 % 3  # 1

# Potencia
resultado = 2 ** 3  # 8`}
                  language="python"
                />
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  Operadores de comparación:
                </h3>
                <CodeBlock 
                  code={`# Igual a
resultado = 10 == 10  # True

# Diferente de
resultado = 10 != 5   # True

# Mayor que
resultado = 10 > 5    # True

# Menor que
resultado = 10 < 15   # True

# Mayor o igual que
resultado = 10 >= 10  # True

# Menor o igual que
resultado = 10 <= 5   # False`}
                  language="python"
                />
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  Operadores lógicos:
                </h3>
                <CodeBlock 
                  code={`# AND (y)
resultado = True and True   # True
resultado = True and False  # False

# OR (o)
resultado = True or False   # True
resultado = False or False  # False

# NOT (no)
resultado = not True        # False
resultado = not False       # True

# Combinaciones
edad = 25
tiene_licencia = True
puede_conducir = edad >= 18 and tiene_licencia  # True`}
                  language="python"
                />
              </div>

              <TipCard 
                title="Precedencia de operadores" 
                icon={Lightbulb}
                type="warning"
              >
                <p className="mb-3">Orden de evaluación (de mayor a menor prioridad):</p>
                <ol className="space-y-1">
                  {[
                    "Paréntesis ()",
                    "Exponente **",
                    "Multiplicación *, División /, División entera //, Módulo %",
                    "Suma +, Resta -",
                    "Comparaciones ==, !=, <, >, <=, >=",
                    "Not",
                    "And",
                    "Or"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </TipCard>

              <ExerciseCard 
                title="Calculadora de operaciones"
                description="Crea un programa que pida dos números al usuario y muestre el resultado de todas las operaciones aritméticas básicas (suma, resta, multiplicación, división, módulo)."
                difficulty="medio"
              />
            </div>
          </div>
        )
      case 'condicionales':
        return (
          <div className="space-y-6">
            {/* Encabezado mejorado */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
                <Code className="w-6 h-6" />
                <span className="font-bold">Lección 4</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Estructuras de Control Condicionales
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Aprende a tomar decisiones en tu código con if, else y elif
              </p>
            </div>

            <TipCard 
              title="¿Qué son las estructuras condicionales?" 
              icon={Code}
              type="info"
            >
              Las estructuras condicionales permiten que tu programa tome decisiones 
              basadas en condiciones específicas. Son fundamentales para crear lógica
              y flujo de control en tus programas.
            </TipCard>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-600" />
                  Estructuras condicionales básicas:
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      If básico:
                    </h4>
                    <CodeBlock 
                      code={`edad = 18

if edad >= 18:
    print("Eres mayor de edad")
    print("Puedes votar")

print("Fin del programa")`}
                      language="python"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      If-else:
                    </h4>
                    <CodeBlock 
                      code={`edad = 16

if edad >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")
    print("No puedes votar")`}
                      language="python"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      If-elif-else:
                    </h4>
                    <CodeBlock 
                      code={`nota = 85

if nota >= 90:
    print("Excelente")
elif nota >= 80:
    print("Muy bueno")
elif nota >= 70:
    print("Bueno")
elif nota >= 60:
    print("Suficiente")
else:
    print("Reprobado")`}
                      language="python"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      Condicionales anidados:
                    </h4>
                    <CodeBlock 
                      code={`edad = 20
tiene_licencia = True

if edad >= 18:
    if tiene_licencia:
        print("Puedes conducir")
    else:
        print("Necesitas obtener licencia")
else:
    print("Eres muy joven para conducir")`}
                      language="python"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                  Operadores ternarios y técnicas avanzadas:
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      Operador ternario:
                    </h4>
                    <CodeBlock 
                      code={`# Forma tradicional
edad = 18
if edad >= 18:
    mensaje = "Mayor de edad"
else:
    mensaje = "Menor de edad"

# Forma ternaria (una línea)
mensaje = "Mayor de edad" if edad >= 18 else "Menor de edad"
print(mensaje)  # Mayor de edad`}
                      language="python"
                    />
                  </div>
                </div>
              </div>

              <TipCard 
                title="Buenas prácticas con condicionales" 
                icon={Lightbulb}
                type="success"
              >
                <ul className="space-y-2">
                  {[
                    "Usa indentación consistente (4 espacios)",
                    "Mantén las condiciones simples y claras",
                    "Usa elif para múltiples condiciones mutuamente excluyentes",
                    "Evita anidar demasiados niveles de condicionales",
                    "Usa paréntesis para clarificar operaciones complejas"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </TipCard>

              <ExerciseCard 
                title="Sistema de calificaciones"
                description="Crea un programa que pida una nota al usuario (0-100) y muestre la calificación correspondiente: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59)."
                difficulty="medio"
              />
            </div>
          </div>
        )
      case 'listas':
        return (
          <div className="space-y-6">
            {/* Encabezado mejorado */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
                <Code className="w-6 h-6" />
                <span className="font-bold">Lección 5</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Listas y Tuplas
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Aprende a trabajar con colecciones de datos en Python
              </p>
            </div>

            <TipCard 
              title="¿Qué son las listas y tuplas?" 
              icon={Code}
              type="info"
            >
              Las listas y tuplas son colecciones ordenadas de elementos. 
              Las listas son mutables (pueden cambiar), las tuplas son inmutables (no pueden cambiar).
            </TipCard>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-teal-600" />
                  Listas:
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      Crear y acceder a listas:
                    </h4>
                    <CodeBlock 
                      code={`# Crear listas
frutas = ["manzana", "banana", "naranja"]
numeros = [1, 2, 3, 4, 5]
mixta = [1, "hola", 3.14, True]

# Lista vacía
vacia = []
vacia2 = list()

# Acceder a elementos (índice empieza en 0)
print(frutas[0])     # manzana
print(frutas[1])     # banana
print(frutas[-1])    # naranja (último elemento)

# Modificar elementos
frutas[0] = "pera"
print(frutas)        # ["pera", "banana", "naranja"]`}
                      language="python"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      Métodos de listas:
                    </h4>
                    <CodeBlock 
                      code={`frutas = ["manzana", "banana", "naranja"]

# Agregar elementos
frutas.append("uva")           # Agrega al final
frutas.insert(1, "pera")       # Inserta en posición

# Eliminar elementos
frutas.remove("banana")        # Elimina por valor
eliminado = frutas.pop()       # Elimina último elemento
eliminado2 = frutas.pop(0)     # Elimina por índice

# Ordenar
frutas.sort()                  # Ordena ascendente
frutas.sort(reverse=True)      # Ordena descendente

# Otros métodos
longitud = len(frutas)         # Longitud
existe = "manzana" in frutas   # Verificar existencia
posicion = frutas.index("pera") # Encontrar posición
conteo = frutas.count("manzana") # Contar elementos`}
                      language="python"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      Slicing (rebanado):
                    </h4>
                    <CodeBlock 
                      code={`numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Slicing básico [inicio:fin]
print(numeros[2:5])     # [2, 3, 4]
print(numeros[:5])      # [0, 1, 2, 3, 4]
print(numeros[5:])      # [5, 6, 7, 8, 9]

# Slicing con paso [inicio:fin:paso]
print(numeros[::2])     # [0, 2, 4, 6, 8]
print(numeros[1::2])    # [1, 3, 5, 7, 9]
print(numeros[::-1])    # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]`}
                      language="python"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-teal-600" />
                  Tuplas:
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                      Crear y usar tuplas:
                    </h4>
                    <CodeBlock 
                      code={`# Crear tuplas
coordenadas = (10, 20)
colores = ("rojo", "verde", "azul")
una_sola = (42,)  # Nota: la coma es necesaria

# Tupla vacía
vacia = ()
vacia2 = tuple()

# Acceder a elementos (igual que listas)
print(coordenadas[0])  # 10
print(colores[-1])     # azul

# Las tuplas son INMUTABLES
# coordenadas[0] = 15  # Esto daría error

# Convertir entre listas y tuplas
lista = [1, 2, 3]
tupla = tuple(lista)   # (1, 2, 3)
lista2 = list(tupla)   # [1, 2, 3]`}
                      language="python"
                    />
                  </div>
                </div>
              </div>

              <TipCard 
                title="¿Cuándo usar cada uno?" 
                icon={Lightbulb}
                type="warning"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold mb-2 text-yellow-800">Usar listas cuando:</h5>
                    <ul className="space-y-1">
                      {[
                        "Necesitas modificar los elementos",
                        "La colección puede cambiar de tamaño",
                        "Trabajas con datos dinámicos"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-yellow-800">Usar tuplas cuando:</h5>
                    <ul className="space-y-1">
                      {[
                        "Los datos no deben cambiar",
                        "Quieres mayor rendimiento",
                        "Usas como claves de diccionario"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TipCard>

              <ExerciseCard 
                title="Gestor de lista de compras"
                description="Crea un programa que gestione una lista de compras. Permite agregar productos, eliminarlos, mostrar la lista y contar cuántos productos hay."
                difficulty="fácil"
              />
            </div>
          </div>
        )
      case 'diccionarios':
        return (
          <div className="space-y-6">
            {/* Encabezado mejorado */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
                <Code className="w-6 h-6" />
                <span className="font-bold">Lección 6</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Diccionarios y Conjuntos
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Aprende a trabajar con estructuras de datos clave-valor y colecciones únicas
              </p>
            </div>

            <TipCard 
              title="¿Qué son los diccionarios y conjuntos?" 
              icon={Code}
              type="info"
            >
              Los diccionarios almacenan pares clave-valor para acceso rápido, mientras que los conjuntos 
              almacenan elementos únicos sin orden específico, ideales para operaciones matemáticas.
            </TipCard>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-cyan-600" />
                  Diccionarios:
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                      Crear y acceder a diccionarios:
                    </h4>
                    <CodeBlock 
                      code={`# Crear diccionarios
persona = {
    "nombre": "Ana",
    "edad": 25,
    "ciudad": "Madrid"
}

# Diccionario vacío
vacio = {}
vacio2 = dict()

# Acceder a valores
print(persona["nombre"])     # Ana
print(persona.get("edad"))   # 25
print(persona.get("pais", "España"))  # España (valor por defecto)

# Modificar valores
persona["edad"] = 26
persona["profesion"] = "Ingeniera"  # Agregar nueva clave

# Eliminar elementos
del persona["ciudad"]
eliminado = persona.pop("profesion")`}
                      language="python"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                      Métodos de diccionarios:
                    </h4>
                    <CodeBlock 
                      code={`persona = {"nombre": "Ana", "edad": 25, "ciudad": "Madrid"}

# Obtener claves, valores y elementos
claves = persona.keys()          # dict_keys(['nombre', 'edad', 'ciudad'])
valores = persona.values()        # dict_values(['Ana', 25, 'Madrid'])
items = persona.items()          # dict_items([('nombre', 'Ana'), ...])

# Convertir a listas
lista_claves = list(claves)      # ['nombre', 'edad', 'ciudad']

# Verificar existencia
existe_nombre = "nombre" in persona     # True
existe_pais = "pais" in persona         # False

# Obtener tamaño
longitud = len(persona)          # 3

# Limpiar diccionario
persona.clear()                  # {}`}
                      language="python"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                      Recorrer diccionarios:
                    </h4>
                    <CodeBlock 
                      code={`persona = {"nombre": "Ana", "edad": 25, "ciudad": "Madrid"}

# Recorrer claves
for clave in persona:
    print(f"{clave}: {persona[clave]}")

# Recorrer clave-valor
for clave, valor in persona.items():
    print(f"{clave}: {valor}")

# Recorrer solo valores
for valor in persona.values():
    print(valor)`}
                      language="python"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-cyan-600" />
                  Conjuntos (Sets):
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Crear y usar conjuntos:
                    </h4>
                    <CodeBlock 
                      code={`# Crear conjuntos
numeros = {1, 2, 3, 4, 5}
vocales = {'a', 'e', 'i', 'o', 'u'}

# Conjunto vacío
vacio = set()  # Nota: {} crea un diccionario vacío

# A partir de una lista (elimina duplicados)
lista_con_duplicados = [1, 2, 2, 3, 3, 3, 4]
sin_duplicados = set(lista_con_duplicados)  # {1, 2, 3, 4}

# Agregar y eliminar elementos
numeros.add(6)           # {1, 2, 3, 4, 5, 6}
numeros.remove(1)        # {2, 3, 4, 5, 6}
numeros.discard(10)      # No da error si no existe
eliminado = numeros.pop()  # Elimina un elemento aleatorio`}
                      language="python"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Operaciones con conjuntos:
                    </h4>
                    <CodeBlock 
                      code={`A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

# Unión (elementos en A o B)
union = A | B           # {1, 2, 3, 4, 5, 6}
union2 = A.union(B)     # {1, 2, 3, 4, 5, 6}

# Intersección (elementos en A y B)
interseccion = A & B    # {3, 4}
interseccion2 = A.intersection(B)  # {3, 4}

# Diferencia (elementos en A pero no en B)
diferencia = A - B      # {1, 2}
diferencia2 = A.difference(B)  # {1, 2}

# Diferencia simétrica (elementos en A o B pero no en ambos)
diff_sim = A ^ B        # {1, 2, 5, 6}
diff_sim2 = A.symmetric_difference(B)  # {1, 2, 5, 6}

# Subconjuntos y superconjuntos
C = {1, 2}
es_subconjunto = C.issubset(A)      # True
es_superconjunto = A.issuperset(C)  # True`}
                      language="python"
                    />
                  </div>
                </div>
              </div>

              <TipCard 
                title="Casos de uso prácticos" 
                icon={Lightbulb}
                type="success"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold mb-2 text-green-800">Diccionarios:</h5>
                    <ul className="space-y-1">
                      {[
                        "Configuraciones y preferencias",
                        "Bases de datos en memoria",
                        "Caché de resultados",
                        "Mapeo de relaciones"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-green-800">Conjuntos:</h5>
                    <ul className="space-y-1">
                      {[
                        "Eliminar duplicados",
                        "Verificar pertenencia rápida",
                        "Operaciones matemáticas",
                        "Control de acceso único"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TipCard>

              <ExerciseCard 
                title="Gestor de contactos"
                description="Crea un programa que gestione contactos usando un diccionario. Cada contacto debe tener nombre, teléfono y email. Permite agregar, buscar, eliminar y mostrar todos los contactos."
                difficulty="medio"
              />
            </div>
          </div>
        )
      case 'bucles':
        return (
          <div className="space-y-6">
            {/* Encabezado mejorado */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
                <Code className="w-6 h-6" />
                <span className="font-bold">Lección 7</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Bucles (for y while)
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Aprende a repetir acciones en tu código con bucles
              </p>
            </div>

            <TipCard 
              title="¿Qué son los bucles?" 
              icon={Code}
              type="info"
            >
              Los bucles permiten repetir bloques de código múltiples veces. 
              Python tiene dos tipos principales: for (para iteraciones conocidas) y while (para condiciones desconocidas).
            </TipCard>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-pink-600" />
                  Bucle for:
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                      Bucle for con diferentes estructuras:
                    </h4>
                    <CodeBlock 
                      code={`# Bucle for con lista
frutas = ["manzana", "banana", "naranja"]
for fruta in frutas:
    print(f"Me gusta la {fruta}")

# Bucle for con range
for i in range(5):           # 0, 1, 2, 3, 4
    print(f"Número: {i}")

for i in range(2, 6):        # 2, 3, 4, 5
    print(f"Número: {i}")

for i in range(0, 10, 2):    # 0, 2, 4, 6, 8
    print(f"Número par: {i}")

# Bucle for con enumerate
for indice, fruta in enumerate(frutas):
    print(f"{indice}: {fruta}")`}
                      language="python"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-pink-600" />
                  Bucle while:
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                      Bucle while en diferentes situaciones:
                    </h4>
                    <CodeBlock 
                      code={`# Bucle while básico
contador = 0
while contador < 5:
    print(f"Contador: {contador}")
    contador += 1

# Bucle while con condición compleja
numero = 1
suma = 0
while suma <= 100:
    suma += numero
    numero += 1
print(f"La suma superó 100 con el número {numero-1}")

# Bucle while infinito (con break)
while True:
    respuesta = input("¿Continuar? (s/n): ")
    if respuesta.lower() == 'n':
        break
    print("Continuando...")`}
                      language="python"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-pink-600" />
                  Control de bucles:
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      Sentencias de control:
                    </h4>
                    <CodeBlock 
                      code={`# break - termina el bucle
for i in range(10):
    if i == 5:
        break
    print(i)  # Imprime 0, 1, 2, 3, 4

# continue - salta a la siguiente iteración
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)  # Imprime 1, 3, 5, 7, 9

# pass - no hace nada (placeholder)
for i in range(5):
    if i == 2:
        pass  # TODO: implementar lógica
    print(i)

# else en bucles (se ejecuta si no hubo break)
for i in range(5):
    print(i)
else:
    print("Bucle completado sin break")

for i in range(5):
    if i == 3:
        break
    print(i)
else:
    print("Esto no se ejecuta")`}
                      language="python"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-pink-600" />
                  Bucles anidados:
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                      Ejemplos prácticos:
                    </h4>
                    <CodeBlock 
                      code={`# Tabla de multiplicar
for i in range(1, 11):
    for j in range(1, 11):
        resultado = i * j
        print(f"{i} x {j} = {resultado}", end="\\t")
    print()  # Salto de línea

# Búsqueda en matriz bidimensional
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

buscado = 5
encontrado = False

for fila in matriz:
    for elemento in fila:
        if elemento == buscado:
            encontrado = True
            break
    if encontrado:
        break

print(f"¿Encontrado {buscado}? {encontrado}")`}
                      language="python"
                    />
                  </div>
                </div>
              </div>

              <TipCard 
                title="Buenas prácticas con bucles" 
                icon={Lightbulb}
                type="success"
              >
                <ul className="space-y-2">
                  {[
                    "Usa for cuando sabes cuántas iteraciones necesitas",
                    "Usa while cuando la condición de salida es desconocida",
                    "Evita bucles infinitos asegurando una condición de salida",
                    "No anides demasiados niveles de bucles (máximo 3-4)",
                    "Usa nombres descriptivos para las variables del bucle",
                    "Considera usar list comprehensions para operaciones simples"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </TipCard>

              <ExerciseCard 
                title="Generador de patrones"
                description="Crea un programa que genere patrones numéricos y de caracteres usando bucles anidados. Por ejemplo: triángulos, cuadrados, y otras figuras geométricas."
                difficulty="medio"
              />
            </div>
          </div>
        )
      case 'comprensiones':
        return (
          <div className="space-y-6">
            {/* Encabezado mejorado */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
                <Code className="w-6 h-6" />
                <span className="font-bold">Lección 8</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Comprensiones de Lista y Diccionario
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Aprende a crear colecciones de forma concisa y elegante
              </p>
            </div>

            <TipCard 
              title="¿Qué son las comprensiones?" 
              icon={Code}
              type="info"
            >
              Las comprensiones son una forma concisa de crear listas, diccionarios 
              y conjuntos en una sola línea de código. Son más legibles y eficientes que los bucles tradicionales.
            </TipCard>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-rose-600" />
                  Comprensiones de lista:
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                      Básicas y con condiciones:
                    </h4>
                    <CodeBlock 
                      code={`# Forma tradicional
cuadrados = []
for i in range(10):
    cuadrados.append(i ** 2)

# Comprensión de lista
cuadrados = [i ** 2 for i in range(10)]
print(cuadrados)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Con condición
pares = [i for i in range(20) if i % 2 == 0]
print(pares)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Con if-else
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
resultado = ["par" if num % 2 == 0 else "impar" for num in numeros]
print(resultado)  # ['impar', 'par', 'impar', 'par', ...]`}
                      language="python"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                      Comprensiones anidadas:
                    </h4>
                    <CodeBlock 
                      code={`# Comprensiones anidadas
matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
aplanada = [num for fila in matriz for num in fila]
print(aplanada)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Crear matriz con comprensiones
matriz_3x3 = [[i + j * 3 for i in range(3)] for j in range(3)]
print(matriz_3x3)  # [[0, 1, 2], [3, 4, 5], [6, 7, 8]]`}
                      language="python"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-rose-600" />
                  Comprensiones de diccionario:
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                      Crear y transformar diccionarios:
                    </h4>
                    <CodeBlock 
                      code={`# Forma tradicional
cuadrados_dict = {}
for i in range(5):
    cuadrados_dict[i] = i ** 2

# Comprensión de diccionario
cuadrados_dict = {i: i ** 2 for i in range(5)}
print(cuadrados_dict)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Con condición
pares_dict = {i: i ** 2 for i in range(10) if i % 2 == 0}
print(pares_dict)  # {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}

# Transformar claves y valores
nombres = ["Ana", "Juan", "María"]
longitudes = {nombre: len(nombre) for nombre in nombres}
print(longitudes)  # {'Ana': 3, 'Juan': 4, 'María': 5}

# Intercambiar claves y valores (si los valores son únicos)
original = {"a": 1, "b": 2, "c": 3}
invertido = {v: k for k, v in original.items()}
print(invertido)  # {1: 'a', 2: 'b', 3: 'c'}`}
                      language="python"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-rose-600" />
                  Comprensiones de conjunto:
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      Crear conjuntos únicos:
                    </h4>
                    <CodeBlock 
                      code={`# Forma tradicional
cuadrados_set = set()
for i in range(10):
    cuadrados_set.add(i ** 2)

# Comprensión de conjunto
cuadrados_set = {i ** 2 for i in range(10)}
print(cuadrados_set)  # {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}

# Eliminar duplicados y transformar
numeros = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
unicos_doblados = {num * 2 for num in numeros}
print(unicos_doblados)  # {2, 4, 6, 8}

# Con condición
pares_set = {i for i in range(20) if i % 2 == 0}
print(pares_set)  # {0, 2, 4, 6, 8, 10, 12, 14, 16, 18}`}
                      language="python"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-rose-600" />
                  Ejemplos prácticos:
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                      Filtrar y transformar datos:
                    </h4>
                    <CodeBlock 
                      code={`# Filtrar y transformar datos
productos = [
    {"nombre": "Manzana", "precio": 2.5, "categoria": "Fruta"},
    {"nombre": "Pan", "precio": 1.8, "categoria": "Panadería"},
    {"nombre": "Leche", "precio": 3.2, "categoria": "Lácteo"},
    {"nombre": "Plátano", "precio": 1.5, "categoria": "Fruta"}
]

# Nombres de frutas
frutas = [p["nombre"] for p in productos if p["categoria"] == "Fruta"]
print(frutas)  # ['Manzana', 'Plátano']

# Productos con descuento
descuento = {p["nombre"]: p["precio"] * 0.9 for p in productos}
print(descuento)

# Categorías únicas
categorias = {p["categoria"] for p in productos}
print(categorias)  # {'Fruta', 'Panadería', 'Lácteo'}`}
                      language="python"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TipCard 
                  title="Ventajas de las comprensiones" 
                  icon={Trophy}
                  type="success"
                >
                  <ul className="space-y-2">
                    {[
                      "Más concisas y legibles",
                      "Generalmente más rápidas que los bucles tradicionales",
                      "Menos propensas a errores",
                      "Consideradas más 'pythonicas'"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </TipCard>

                <TipCard 
                  title="Cuándo evitarlas" 
                  icon={Lightbulb}
                  type="warning"
                >
                  <ul className="space-y-2">
                    {[
                      "Cuando la lógica es muy compleja",
                      "Cuando necesitas múltiples líneas de código",
                      "Cuando la comprensión sería demasiado larga",
                      "Cuando necesitas depurar paso a paso"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </TipCard>
              </div>

              <ExerciseCard 
                title="Procesador de textos"
                description="Crea un programa que use comprensiones para analizar un texto: contar palabras, encontrar palabras únicas, crear diccionarios de frecuencia, y filtrar palabras por longitud."
                difficulty="difícil"
              />
            </div>
          </div>
        )
      case 'actividades':
        return (
          <div className="space-y-6">
            {/* Encabezado mejorado */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
                <Play className="w-6 h-6" />
                <span className="font-bold">Lección 9</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Quiz de Evaluación
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Pon a prueba tus conocimientos con una pregunta por tema
              </p>
            </div>

            <TipCard 
              title="¡Demuestra lo que has aprendido!" 
              icon={Trophy}
              type="info"
            >
              Responde estas 8 preguntas, una por cada tema estudiado. 
              Selecciona la respuesta correcta y descubre cuánto has aprendido.
            </TipCard>

            <div className="space-y-6">
              {/* Pregunta 1: Introducción */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h3 className="font-bold text-gray-800">Introducción - Google Colab</h3>
                </div>
                <QuizQuestion
                  question="¿Qué es Google Colab?"
                  options={[
                    "Un lenguaje de programación",
                    "Un entorno de desarrollo gratuito para Python en el navegador",
                    "Un sistema operativo para programar",
                    "Un editor de texto para código"
                  ]}
                  correctAnswer={1}
                  explanation="Google Colab es un entorno de desarrollo gratuito que permite escribir y ejecutar código Python en el navegador sin necesidad de configuración."
                />
              </div>

              {/* Pregunta 2: Variables */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h3 className="font-bold text-gray-800">Variables y Tipos de Datos</h3>
                </div>
                <QuizQuestion
                  question="¿Qué tipo de dato devuelve la función type(3.14) en Python?"
                  options={[
                    "int",
                    "str",
                    "float",
                    "complex"
                  ]}
                  correctAnswer={2}
                  explanation="3.14 es un número decimal, por lo que Python lo identifica como tipo float (número de punto flotante)."
                />
              </div>

              {/* Pregunta 3: Operadores */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h3 className="font-bold text-gray-800">Operadores</h3>
                </div>
                <QuizQuestion
                  question="¿Qué resultado da la operación 10 % 3 en Python?"
                  options={[
                    "1",
                    "3",
                    "0",
                    "13"
                  ]}
                  correctAnswer={0}
                  explanation="El operador % (módulo) devuelve el resto de la división. 10 dividido por 3 es 3 con resto 1."
                />
              </div>

              {/* Pregunta 4: Condicionales */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <h3 className="font-bold text-gray-800">Condicionales</h3>
                </div>
                <QuizQuestion
                  question="¿Qué estructura condicional se usa cuando tienes múltiples condiciones excluyentes?"
                  options={[
                    "if-else",
                    "if-elif-else",
                    "if-if-else",
                    "switch-case"
                  ]}
                  correctAnswer={1}
                  explanation="La estructura if-elif-else permite evaluar múltiples condiciones excluyentes, donde solo una se ejecutará."
                />
              </div>

              {/* Pregunta 5: Listas */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <h3 className="font-bold text-gray-800">Listas</h3>
                </div>
                <QuizQuestion
                  question="¿Cómo se accede al último elemento de una lista llamada 'mi_lista'?"
                  options={[
                    "mi_lista[-1]",
                    "mi_lista[último]",
                    "mi_lista[end]",
                    "mi_lista.last()"
                  ]}
                  correctAnswer={0}
                  explanation="En Python, se usa el índice -1 para acceder al último elemento de una lista."
                />
              </div>

              {/* Pregunta 6: Diccionarios */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    6
                  </div>
                  <h3 className="font-bold text-gray-800">Diccionarios</h3>
                </div>
                <QuizQuestion
                  question="¿Cuál es la forma correcta de crear un diccionario en Python?"
                  options={[
                    "mi_dict = {'clave': 'valor'}",
                    "mi_dict = ['clave': 'valor']",
                    "mi_dict = ('clave': 'valor')",
                    "mi_dict = \"clave\": \"valor\""
                  ]}
                  correctAnswer={0}
                  explanation="Los diccionarios en Python se crean usando llaves {} con pares clave:valor separados por comas."
                />
              </div>

              {/* Pregunta 7: Bucles */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    7
                  </div>
                  <h3 className="font-bold text-gray-800">Bucles</h3>
                </div>
                <QuizQuestion
                  question="¿Qué bucle se usa generalmente cuando se conoce la cantidad exacta de iteraciones?"
                  options={[
                    "while",
                    "for",
                    "do-while",
                    "loop"
                  ]}
                  correctAnswer={1}
                  explanation="El bucle for se usa cuando se conoce la cantidad exacta de iteraciones, como al recorrer una lista o un rango."
                />
              </div>

              {/* Pregunta 8: Comprensiones */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    8
                  </div>
                  <h3 className="font-bold text-gray-800">Comprensiones</h3>
                </div>
                <QuizQuestion
                  question="¿Cuál es la equivalencia de [x**2 for x in range(5)] en un bucle tradicional?"
                  options={[
                    "for x in range(5): print(x**2)",
                    "resultado = []\nfor x in range(5):\n    resultado.append(x**2)",
                    "resultado = list(range(5))\nfor x in resultado:\n    x**2",
                    "for x in range(5):\n    x = x**2"
                  ]}
                  correctAnswer={1}
                  explanation="La comprensión [x**2 for x in range(5)] crea una lista con los cuadrados de los números del 0 al 4, lo que equivale a crear una lista vacía y agregar cada cuadrado en un bucle."
                />
              </div>
            </div>

            <TipCard 
              title="¡Felicidades por completar el quiz!" 
              icon={Trophy}
              type="success"
            >
              Has respondido 8 preguntas que cubren todos los temas fundamentales de Python. 
              Repasa las explicaciones de las preguntas que te hayan costado más trabajo y sigue practicando.
            </TipCard>
          </div>
        )
      case 'recursos':
        return (
          <div className="space-y-6">
            {/* Encabezado mejorado */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
                <Trophy className="w-6 h-6" />
                <span className="font-bold">Lección 10</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Recursos y Actividades Prácticas
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Accede a las actividades prácticas en Google Colab
              </p>
            </div>

            <TipCard 
              title="¡Practica en tiempo real!" 
              icon={BookOpen}
              type="info"
            >
              Estos enlaces te llevarán directamente a Google Colab donde podrás 
              ejecutar código y realizar actividades prácticas para reforzar tus conocimientos.
            </TipCard>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Actividad Módulo 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Actividad del Módulo 1</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Introducción a Python y Google Colab
                  </p>
                </div>
                
                <a 
                  href="https://colab.research.google.com/drive/1wL6Dli00h58X_HLPTGnSpq0KW1W15i16#scrollTo=714ec171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <Code className="w-4 h-4" />
                  Acceder a Actividad
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <div className="mt-3 text-xs text-gray-600 text-center">
                  <p>Se abrirá en una nueva pestaña</p>
                </div>
              </div>

              {/* Actividad Módulo 2 */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Actividad del Módulo 2</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Variables y Tipos de Datos
                  </p>
                </div>
                
                <a 
                  href="https://colab.research.google.com/drive/1DA6Y3QvQw8hycQuQNTEMfK8XkFBu5XGc#scrollTo=d02394a4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <Code className="w-4 h-4" />
                  Acceder a Actividad
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <div className="mt-3 text-xs text-gray-600 text-center">
                  <p>Se abrirá en una nueva pestaña</p>
                </div>
              </div>

              {/* Python Variables */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Python Variables</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Aprende más sobre variables en W3Schools
                  </p>
                </div>
                
                <a 
                  href="https://www.w3schools.com/python/python_variables.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <BookOpen className="w-4 h-4" />
                  Aprende Variables
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <div className="mt-3 text-xs text-gray-600 text-center">
                  <p>Se abrirá en una nueva pestaña</p>
                </div>
              </div>

              {/* Python Tipos de Datos */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Python Tipos de Datos</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Aprende sobre los tipos de datos en Python
                  </p>
                </div>
                
                <a 
                  href="https://www.w3schools.com/python/python_datatypes.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <Code className="w-4 h-4" />
                  Tipos de Datos
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <div className="mt-3 text-xs text-gray-600 text-center">
                  <p>Se abrirá en una nueva pestaña</p>
                </div>
              </div>

              {/* Python Booleanos */}
              <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Python Booleanos</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Aprende sobre valores booleanos en Python
                  </p>
                </div>
                
                <a 
                  href="https://www.w3schools.com/python/python_booleans.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <Code className="w-4 h-4" />
                  Booleanos
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <div className="mt-3 text-xs text-gray-600 text-center">
                  <p>Se abrirá en una nueva pestaña</p>
                </div>
              </div>

              {/* Python Operadores */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Python Operadores</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Aprende sobre operadores en Python
                  </p>
                </div>
                
                <a 
                  href="https://www.w3schools.com/python/python_operators.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <Code className="w-4 h-4" />
                  Operadores
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <div className="mt-3 text-xs text-gray-600 text-center">
                  <p>Se abrirá en una nueva pestaña</p>
                </div>
              </div>

              {/* Python Condicionales */}
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Python Condicionales</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Aprende sobre condicionales en Python
                  </p>
                </div>
                
                <a 
                  href="https://www.w3schools.com/python/python_conditions.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <Code className="w-4 h-4" />
                  Condicionales
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <div className="mt-3 text-xs text-gray-600 text-center">
                  <p>Se abrirá en una nueva pestaña</p>
                </div>
              </div>

              {/* Python Listas */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Python Listas</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Aprende sobre listas en Python
                  </p>
                </div>
                
                <a 
                  href="https://www.w3schools.com/python/python_lists.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <Code className="w-4 h-4" />
                  Listas
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <div className="mt-3 text-xs text-gray-600 text-center">
                  <p>Se abrirá en una nueva pestaña</p>
                </div>
              </div>

              {/* Python Tuplas */}
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Python Tuplas</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Aprende sobre tuplas en Python
                  </p>
                </div>
                
                <a 
                  href="https://www.w3schools.com/python/python_tuples.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <Code className="w-4 h-4" />
                  Tuplas
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <div className="mt-3 text-xs text-gray-600 text-center">
                  <p>Se abrirá en una nueva pestaña</p>
                </div>
              </div>

              {/* Python Conjuntos */}
              <div className="bg-gradient-to-br from-lime-50 to-green-50 border border-lime-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-lime-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Python Conjuntos</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Aprende sobre conjuntos en Python
                  </p>
                </div>
                
                <a 
                  href="https://www.w3schools.com/python/python_sets.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <Code className="w-4 h-4" />
                  Conjuntos
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <div className="mt-3 text-xs text-gray-600 text-center">
                  <p>Se abrirá en una nueva pestaña</p>
                </div>
              </div>

              {/* Python Diccionarios */}
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Python Diccionarios</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Aprende sobre diccionarios en Python
                  </p>
                </div>
                
                <a 
                  href="https://www.w3schools.com/python/python_dictionaries.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <Code className="w-4 h-4" />
                  Diccionarios
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <div className="mt-3 text-xs text-gray-600 text-center">
                  <p>Se abrirá en una nueva pestaña</p>
                </div>
              </div>

              {/* Python If ... Else */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Python If ... Else</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Aprende sobre estructuras If...Else
                  </p>
                </div>
                
                <a 
                  href="https://www.w3schools.com/python/python_conditions.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <Code className="w-4 h-4" />
                  If...Else
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <div className="mt-3 text-xs text-gray-600 text-center">
                  <p>Se abrirá en una nueva pestaña</p>
                </div>
              </div>

              {/* Python For */}
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Python For</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Aprende sobre bucles For en Python
                  </p>
                </div>
                
                <a 
                  href="https://www.w3schools.com/python/python_for_loops.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <Code className="w-4 h-4" />
                  Bucles For
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <div className="mt-3 text-xs text-gray-600 text-center">
                  <p>Se abrirá en una nueva pestaña</p>
                </div>
              </div>

              {/* Python While */}
              <div className="bg-gradient-to-br from-fuchsia-50 to-rose-50 border border-fuchsia-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Python While</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Aprende sobre bucles While en Python
                  </p>
                </div>
                
                <a 
                  href="https://www.w3schools.com/python/python_while_loops.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-fuchsia-500 to-rose-600 hover:from-fuchsia-600 hover:to-rose-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <Code className="w-4 h-4" />
                  Bucles While
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <div className="mt-3 text-xs text-gray-600 text-center">
                  <p>Se abrirá en una nueva pestaña</p>
                </div>
              </div>

              {/* Python range */}
              <div className="bg-gradient-to-br from-sky-50 to-cyan-50 border border-sky-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Python range</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Aprende sobre la función range()
                  </p>
                </div>
                
                <a 
                  href="https://www.w3schools.com/python/python_range.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-sky-500 to-cyan-600 hover:from-sky-600 hover:to-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <Code className="w-4 h-4" />
                  Función range()
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <div className="mt-3 text-xs text-gray-600 text-center">
                  <p>Se abrirá en una nueva pestaña</p>
                </div>
              </div>

              {/* Python Strings */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Python Strings</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Aprende sobre cadenas de texto en Python
                  </p>
                </div>
                
                <a 
                  href="https://www.w3schools.com/python/python_strings.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <Code className="w-4 h-4" />
                  Strings
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <div className="mt-3 text-xs text-gray-600 text-center">
                  <p>Se abrirá en una nueva pestaña</p>
                </div>
              </div>
            </div>

            <TipCard 
              title="Consejos para las actividades" 
              icon={Lightbulb}
              type="success"
            >
              <ul className="space-y-2">
                {[
                  "Asegúrate de tener una cuenta de Google para acceder a Colab",
                  "Sigue las instrucciones paso a paso en cada notebook",
                  "Experimenta modificando el código para ver qué sucede",
                  "No tengas miedo de cometer errores, es parte del aprendizaje",
                  "Guarda una copia del notebook en tu Drive para futuras referencias"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </TipCard>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-6 h-6 text-purple-600" />
                <h3 className="font-bold text-purple-800">¡Sigue aprendiendo!</h3>
              </div>
              <p className="text-purple-700 leading-relaxed">
                Estas actividades prácticas te ayudarán a consolidar tus conocimientos. 
                La práctica constante es la clave para convertirte en un programador experto en Python.
              </p>
            </div>
          </div>
        )
      case 'videos':
        return (
          <div className="space-y-6">
            {/* Encabezado mejorado */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
                <Video className="w-6 h-6" />
                <span className="font-bold">Lección 11</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Videos de Aprendizaje
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Accede a videos educativos para complementar tu aprendizaje
              </p>
            </div>

            <TipCard 
              title="¡Aprende con videos!" 
              icon={Video}
              type="info"
            >
              Estos videos han sido creados específicamente para complementar los temas 
              vistos en el curso. Cada video explica conceptos clave de forma visual y práctica.
            </TipCard>

            {/* Enlace principal */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-indigo-800 mb-2">Página Principal de Conceptos</h4>
                  <p className="text-indigo-700 mb-4 leading-relaxed">
                    Explora conceptos fundamentales y aplicaciones prácticas de Python en nuestra página principal.
                  </p>
                  <a 
                    href="https://pagina-ia-automatizaci-n.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visitar página principal
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Videos específicos */}
            <div className="space-y-6">
              <h3 className="font-bold text-gray-800 text-xl flex items-center gap-2">
                <Video className="w-5 h-5 text-emerald-600" />
                Videos por Tema
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Video Módulo 1 */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <Video className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800">Módulo 1</h4>
                      <p className="text-sm text-blue-600">Introducción a Python</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    Video introductorio que explica los conceptos básicos de Python y cómo empezar a programar.
                  </p>
                  <a 
                    href="https://lumen5.com/user/frank-yesid-zapata-c/introduccion-a-pytho-8k1jz/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                  >
                    <Video className="w-4 h-4" />
                    Ver video
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>
                </div>

                {/* Video Secuencias */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <Video className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800">Secuencias</h4>
                      <p className="text-sm text-green-600">Listas y Tuplas</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    Aprende sobre secuencias en Python, incluyendo listas, tuplas y sus operaciones principales.
                  </p>
                  <a 
                    href="https://lumen5.com/user/frank-yesid-zapata-c/introduccion-y-que-3yi27/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                  >
                    <Video className="w-4 h-4" />
                    Ver video
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>
                </div>

                {/* Video Conjuntos */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Video className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-800">Conjuntos</h4>
                      <p className="text-sm text-purple-600">Sets en Python</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    Tutorial completo sobre conjuntos (sets) en Python, sus operaciones y casos de uso prácticos.
                  </p>
                  <a 
                    href="https://lumen5.com/user/frank-yesid-zapata-c/conjuntos-en-python-5rxvy/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                  >
                    <Video className="w-4 h-4" />
                    Ver video
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>
                </div>

                {/* Video Ciclos */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                      <Video className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-orange-800">Ciclos</h4>
                      <p className="text-sm text-orange-600">Bucles en Python</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    Explicación detallada de los ciclos (bucles) en Python, incluyendo for, while y sus aplicaciones.
                  </p>
                  <a 
                    href="https://lumen5.com/user/frank-yesid-zapata-c/entendiendo-los-cicl-fo213/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                  >
                    <Video className="w-4 h-4" />
                    Ver video
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <TipCard 
              title="Consejos para el aprendizaje" 
              icon={Lightbulb}
              type="success"
            >
              <ul className="space-y-2">
                {[
                  "Ve los videos en orden, siguiendo la secuencia del curso",
                  "Toma notas mientras ves los videos",
                  "Pausa el video para practicar los conceptos",
                  "Repite los videos que te resulten más difíciles",
                  "Combina el video con la práctica en Google Colab"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </TipCard>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Curso de Python Interactivo
          </h1>
          <p className="text-lg text-gray-600">
            Aprende Python desde cero con ejemplos prácticos
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 mb-8">
          {tabs.map((tab) => {
            const IconComponent = tab.icon
            const isActive = activeTab === tab.id
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative group
                  ${tab.bgColor} ${tab.textColor} ${tab.borderColor}
                  border-2 rounded-xl p-4 h-auto flex flex-col items-center justify-center
                  hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1
                  ${isActive ? 'shadow-2xl ring-4 ring-offset-2 ring-' + tab.color + '-400' : ''}
                  overflow-hidden
                `}
              >
                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="flex flex-col items-center gap-2 relative z-10">
                  <div className={`
                    ${isActive ? 'bg-white text-' + tab.color + '-600' : 'bg-white/80 text-gray-600'}
                    w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                    transition-all duration-300
                  `}>
                    {tab.number}
                  </div>
                  <IconComponent className={`w-6 h-6 ${isActive ? 'text-white' : tab.textColor} transition-colors duration-300`} />
                  <span className="text-sm font-bold text-center leading-tight">
                    {tab.title}
                  </span>
                  {isActive && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Barra de progreso */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Tu progreso</span>
            <span className="text-sm font-medium text-gray-700">
              {tabs.findIndex(tab => tab.id === activeTab) + 1} de {tabs.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((tabs.findIndex(tab => tab.id === activeTab) + 1) / tabs.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl shadow-2xl p-8 border border-white/20 backdrop-blur-sm">
          {getTabContent(activeTab)}
        </div>
      </div>
    </div>
  )
}