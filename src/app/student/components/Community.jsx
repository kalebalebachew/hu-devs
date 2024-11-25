import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from 'lucide-react'

export function Community() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Community</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Community Event {index + 1}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Brief description of the event</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

