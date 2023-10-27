/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useMemo } from 'react'

import { LS_INITIAL_VIEWS, LocalStorageViews } from '@/storage/views'
import { CustomFilm, CustomPerson, CustomPlanet, CustomSpecie, CustomStarship, CustomVehicle } from '@/types/resources'

import { useLocalStorage } from './useLocalStorage'

interface Props {
  people?: CustomPerson[]
  films?: CustomFilm[]
  starships?: CustomStarship[]
  vehicles?: CustomVehicle[]
  species?: CustomSpecie[]
  planets?: CustomPlanet[]
  count?: number
}

export function useMostViewedResources({ people, films, starships, vehicles, species, planets, count }: Props) {
  const [views] = useLocalStorage<LocalStorageViews>('views', LS_INITIAL_VIEWS)

  const mostViewedResources = useMemo(() => {
    const peopleWithViews = people ? people.map((p) => ({ ...p, views: views.people[p.id] ?? 0 })) : []
    const sortedPeopleByViews = peopleWithViews.sort((a, b) => b.views - a.views)

    const filmsWithViews = films ? films.map((f) => ({ ...f, views: views.films[f.id] ?? 0 })) : []
    const sortedFilmsByViews = filmsWithViews.sort((a, b) => b.views - a.views)

    const starshipsWithViews = starships ? starships.map((s) => ({ ...s, views: views.starships[s.id] ?? 0 })) : []
    const sortedStarshipsByViews = starshipsWithViews.sort((a, b) => b.views - a.views)

    const vehiclesWithViews = vehicles ? vehicles.map((v) => ({ ...v, views: views.vehicles[v.id] ?? 0 })) : []
    const sortedVehiclesByViews = vehiclesWithViews.sort((a, b) => b.views - a.views)

    const speciesWithViews = species ? species.map((s) => ({ ...s, views: views.species[s.id] ?? 0 })) : []
    const sortedSpeciesByViews = speciesWithViews.sort((a, b) => b.views - a.views)

    const planetsWithViews = planets ? planets.map((p) => ({ ...p, views: views.planets[p.id] ?? 0 })) : []
    const sortedPlanetsByViews = planetsWithViews.sort((a, b) => b.views - a.views)

    return {
      people: count ? sortedPeopleByViews.slice(0, count) : sortedPeopleByViews,
      films: count ? sortedFilmsByViews.slice(0, count) : sortedFilmsByViews,
      starships: count ? sortedStarshipsByViews.slice(0, count) : sortedStarshipsByViews,
      vehicles: count ? sortedVehiclesByViews.slice(0, count) : sortedVehiclesByViews,
      species: count ? sortedSpeciesByViews.slice(0, count) : sortedSpeciesByViews,
      planets: count ? sortedPlanetsByViews.slice(0, count) : sortedPlanetsByViews
    }
  }, [views])

  return mostViewedResources
}
