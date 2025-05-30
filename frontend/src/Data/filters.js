export const LEADERBOARDS_FILTERS_DATA = [
  {
    title: "Leaderboard Type",
    queryName: "leaderboard",
    defaultUrlQuery: "speedrun",
    filtersData: [
      { text: "Speedrun", id: 1 },
      { text: "Skilled", id: 2 },
      { text: "Defrag", id: 3 },
      { text: "Surf", id: 4 },
    ],
    id: 1,
  },
  {
    title: "FPS Status",
    queryName: "fps",
    defaultUrlQuery: "125",
    filtersData: [
      { text: "43", id: 1 },
      { text: "76", id: 2 },
      { text: "125", id: 3 },
      { text: "250", id: 4 },
      { text: "333", id: 5 },
    ],
    id: 2,
  },
  {
    title: "Players Region",
    queryName: "Region",
    defaultUrlQuery: "global",
    filtersData: [
      { text: "Global", queryValue: "Global", id: 1 },
      {
        text: "NA",
        queryValue: "North America",
        toolTip: "North America",
        id: 2,
      },
      { text: "EU", queryValue: "Europe", toolTip: "Europe", id: 3 },
      { text: "AS", queryValue: "Asia", toolTip: "Asia", id: 4 },
      { text: "OC", queryValue: "Oceania", toolTip: "Oceania", id: 5 },
      {
        text: "SA",
        queryValue: "South America",
        toolTip: "South America",
        id: 6,
      },
      { text: "AF", queryValue: "Africa", toolTip: "Africa", id: 7 },
    ],
    id: 3,
  },
  {
    title: "Last Seen",
    queryName: "last-seen",
    defaultUrlQuery: "All time",
    filtersData: [
      { text: "All time", id: 1 },
      { text: "Today", id: 2 },
      { text: "This Week", id: 3 },
      { text: "This Month", id: 4 },
      { text: "Long Time", id: 5 },
    ],
    id: 4,
  },
];

export const MAPS_FILTERS_DATA = [
  {
    label: "Map Type",
    queryName: "type",
    defaultUrlQuery: "jump",
    filtersData: [
      { text: "All", queryValue: "all", id: 1 },
      { text: "Jump", queryValue: "jump", id: 2 },
      { text: "Defrag", queryValue: "defrag", id: 3 },
      { text: "Surf", queryValue: "surf", id: 4 },
    ],
    tooltipText: "Select a map type to narrow down results",
    id: 1,
  },
  {
    label: "Rating",
    queryName: "rating",
    defaultUrlQuery: "all",
    filtersData: [
      { text: "All", queryValue: "all", id: 1 },
      { text: 1, queryValue: 1, id: 2 },
      { text: 2, queryValue: 2, id: 3 },
      { text: 3, queryValue: 3, id: 4 },
      { text: 4, queryValue: 4, id: 5 },
      { text: 5, queryValue: 5, id: 6 },
    ],
    tooltipText: "Filter maps by their rating (Not completed yet)",
    id: 2,
  },
];
